import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateHitTypeOfHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateHitTypeOfHit = "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT"
}
export declare class UpdateHitTypeOfHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHitTypeOfHitxAmzTargetEnum;
}
export declare class UpdateHitTypeOfHitRequest extends SpeakeasyBase {
    headers: UpdateHitTypeOfHitHeaders;
    request: shared.UpdateHitTypeOfHitRequest;
}
export declare class UpdateHitTypeOfHitResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
    updateHitTypeOfHitResponse?: Map<string, any>;
}
