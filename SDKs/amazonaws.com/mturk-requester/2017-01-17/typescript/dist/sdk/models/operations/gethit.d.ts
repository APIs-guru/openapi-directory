import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117GetHit = "MTurkRequesterServiceV20170117.GetHIT"
}
export declare class GetHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHitxAmzTargetEnum;
}
export declare class GetHitRequest extends SpeakeasyBase {
    headers: GetHitHeaders;
    request: shared.GetHitRequest;
}
export declare class GetHitResponse extends SpeakeasyBase {
    contentType: string;
    getHitResponse?: shared.GetHitResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
