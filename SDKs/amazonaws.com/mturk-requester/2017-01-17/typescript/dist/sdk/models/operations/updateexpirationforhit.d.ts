import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateExpirationForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateExpirationForHit = "MTurkRequesterServiceV20170117.UpdateExpirationForHIT"
}
export declare class UpdateExpirationForHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateExpirationForHitxAmzTargetEnum;
}
export declare class UpdateExpirationForHitRequest extends SpeakeasyBase {
    headers: UpdateExpirationForHitHeaders;
    request: shared.UpdateExpirationForHitRequest;
}
export declare class UpdateExpirationForHitResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
    updateExpirationForHitResponse?: Map<string, any>;
}
