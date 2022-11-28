import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ApproveAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117ApproveAssignment = "MTurkRequesterServiceV20170117.ApproveAssignment"
}
export declare class ApproveAssignmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ApproveAssignmentXAmzTargetEnum;
}
export declare class ApproveAssignmentRequest extends SpeakeasyBase {
    headers: ApproveAssignmentHeaders;
    request: shared.ApproveAssignmentRequest;
}
export declare class ApproveAssignmentResponse extends SpeakeasyBase {
    approveAssignmentResponse?: Map<string, any>;
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
