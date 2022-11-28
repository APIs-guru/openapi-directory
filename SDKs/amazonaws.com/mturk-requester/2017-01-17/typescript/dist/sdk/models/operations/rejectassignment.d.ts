import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectAssignment = "MTurkRequesterServiceV20170117.RejectAssignment"
}
export declare class RejectAssignmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectAssignmentXAmzTargetEnum;
}
export declare class RejectAssignmentRequest extends SpeakeasyBase {
    headers: RejectAssignmentHeaders;
    request: shared.RejectAssignmentRequest;
}
export declare class RejectAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    rejectAssignmentResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
