import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteFlowTemplate = "IotThingsGraphFrontEndService.DeleteFlowTemplate"
}
export declare class DeleteFlowTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFlowTemplateXAmzTargetEnum;
}
export declare class DeleteFlowTemplateRequest extends SpeakeasyBase {
    headers: DeleteFlowTemplateHeaders;
    request: shared.DeleteFlowTemplateRequest;
}
export declare class DeleteFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleteFlowTemplateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    statusCode: number;
    throttlingException?: any;
}
