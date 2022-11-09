import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteAccountAssignmentXAmzTargetEnum {
    SwbExternalServiceDeleteAccountAssignment = "SWBExternalService.DeleteAccountAssignment"
}
export declare class DeleteAccountAssignmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccountAssignmentXAmzTargetEnum;
}
export declare class DeleteAccountAssignmentRequest extends SpeakeasyBase {
    headers: DeleteAccountAssignmentHeaders;
    request: shared.DeleteAccountAssignmentRequest;
}
export declare class DeleteAccountAssignmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteAccountAssignmentResponse?: shared.DeleteAccountAssignmentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
