import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountAssignmentCreationStatusXAmzTargetEnum {
    SwbExternalServiceDescribeAccountAssignmentCreationStatus = "SWBExternalService.DescribeAccountAssignmentCreationStatus"
}
export declare class DescribeAccountAssignmentCreationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountAssignmentCreationStatusXAmzTargetEnum;
}
export declare class DescribeAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
    headers: DescribeAccountAssignmentCreationStatusHeaders;
    request: shared.DescribeAccountAssignmentCreationStatusRequest;
}
export declare class DescribeAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountAssignmentCreationStatusResponse?: shared.DescribeAccountAssignmentCreationStatusResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
