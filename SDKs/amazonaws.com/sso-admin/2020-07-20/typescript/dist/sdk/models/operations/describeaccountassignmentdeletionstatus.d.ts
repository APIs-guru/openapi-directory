import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountAssignmentDeletionStatusXAmzTargetEnum {
    SwbExternalServiceDescribeAccountAssignmentDeletionStatus = "SWBExternalService.DescribeAccountAssignmentDeletionStatus"
}
export declare class DescribeAccountAssignmentDeletionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAssignmentDeletionStatusXAmzTargetEnum;
}
export declare class DescribeAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
    headers: DescribeAccountAssignmentDeletionStatusHeaders;
    request: shared.DescribeAccountAssignmentDeletionStatusRequest;
}
export declare class DescribeAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountAssignmentDeletionStatusResponse?: shared.DescribeAccountAssignmentDeletionStatusResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
