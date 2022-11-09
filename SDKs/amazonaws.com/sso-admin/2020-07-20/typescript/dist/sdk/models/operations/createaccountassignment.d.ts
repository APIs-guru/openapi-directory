import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateAccountAssignmentXAmzTargetEnum {
    SwbExternalServiceCreateAccountAssignment = "SWBExternalService.CreateAccountAssignment"
}
export declare class CreateAccountAssignmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccountAssignmentXAmzTargetEnum;
}
export declare class CreateAccountAssignmentRequest extends SpeakeasyBase {
    headers: CreateAccountAssignmentHeaders;
    request: shared.CreateAccountAssignmentRequest;
}
export declare class CreateAccountAssignmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createAccountAssignmentResponse?: shared.CreateAccountAssignmentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
