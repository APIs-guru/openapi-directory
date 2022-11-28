import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUpdateSystemTemplate = "IotThingsGraphFrontEndService.UpdateSystemTemplate"
}
export declare class UpdateSystemTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSystemTemplateXAmzTargetEnum;
}
export declare class UpdateSystemTemplateRequest extends SpeakeasyBase {
    headers: UpdateSystemTemplateHeaders;
    request: shared.UpdateSystemTemplateRequest;
}
export declare class UpdateSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSystemTemplateResponse?: shared.UpdateSystemTemplateResponse;
}
