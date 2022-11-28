import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkflowXAmzTargetEnum {
    TransferServiceCreateWorkflow = "TransferService.CreateWorkflow"
}
export declare class CreateWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkflowXAmzTargetEnum;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    headers: CreateWorkflowHeaders;
    request: shared.CreateWorkflowRequest;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createWorkflowResponse?: shared.CreateWorkflowResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
