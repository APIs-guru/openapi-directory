import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemTemplate = "IotThingsGraphFrontEndService.GetSystemTemplate"
}
export declare class GetSystemTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemTemplateXAmzTargetEnum;
}
export declare class GetSystemTemplateRequest extends SpeakeasyBase {
    headers: GetSystemTemplateHeaders;
    request: shared.GetSystemTemplateRequest;
}
export declare class GetSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    getSystemTemplateResponse?: shared.GetSystemTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
