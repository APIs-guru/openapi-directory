import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetFlowTemplate = "IotThingsGraphFrontEndService.GetFlowTemplate"
}
export declare class GetFlowTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFlowTemplateXAmzTargetEnum;
}
export declare class GetFlowTemplateRequest extends SpeakeasyBase {
    headers: GetFlowTemplateHeaders;
    request: shared.GetFlowTemplateRequest;
}
export declare class GetFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    getFlowTemplateResponse?: shared.GetFlowTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
