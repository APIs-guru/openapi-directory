import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkflowXAmzTargetEnum {
    TransferServiceDeleteWorkflow = "TransferService.DeleteWorkflow"
}
export declare class DeleteWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkflowXAmzTargetEnum;
}
export declare class DeleteWorkflowRequest extends SpeakeasyBase {
    headers: DeleteWorkflowHeaders;
    request: shared.DeleteWorkflowRequest;
}
export declare class DeleteWorkflowResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
