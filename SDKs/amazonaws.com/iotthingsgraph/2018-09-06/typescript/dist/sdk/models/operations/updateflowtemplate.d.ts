import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUpdateFlowTemplate = "IotThingsGraphFrontEndService.UpdateFlowTemplate"
}
export declare class UpdateFlowTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFlowTemplateXAmzTargetEnum;
}
export declare class UpdateFlowTemplateRequest extends SpeakeasyBase {
    headers: UpdateFlowTemplateHeaders;
    request: shared.UpdateFlowTemplateRequest;
}
export declare class UpdateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFlowTemplateResponse?: shared.UpdateFlowTemplateResponse;
}
