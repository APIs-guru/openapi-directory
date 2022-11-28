import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetAssignment = "MTurkRequesterServiceV20170117.GetAssignment"
}
export declare class GetAssignmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssignmentXAmzTargetEnum;
}
export declare class GetAssignmentRequest extends SpeakeasyBase {
    headers: GetAssignmentHeaders;
    request: shared.GetAssignmentRequest;
}
export declare class GetAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    getAssignmentResponse?: shared.GetAssignmentResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
