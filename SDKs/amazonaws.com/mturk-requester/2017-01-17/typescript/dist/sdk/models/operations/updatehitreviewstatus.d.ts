import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateHitReviewStatusXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateHitReviewStatus = "MTurkRequesterServiceV20170117.UpdateHITReviewStatus"
}
export declare class UpdateHitReviewStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHitReviewStatusXAmzTargetEnum;
}
export declare class UpdateHitReviewStatusRequest extends SpeakeasyBase {
    headers: UpdateHitReviewStatusHeaders;
    request: shared.UpdateHitReviewStatusRequest;
}
export declare class UpdateHitReviewStatusResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
    updateHitReviewStatusResponse?: Map<string, any>;
}
