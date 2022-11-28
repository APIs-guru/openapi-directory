import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHit = "MTurkRequesterServiceV20170117.CreateHIT"
}
export declare class CreateHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHitxAmzTargetEnum;
}
export declare class CreateHitRequest extends SpeakeasyBase {
    headers: CreateHitHeaders;
    request: shared.CreateHitRequest;
}
export declare class CreateHitResponse extends SpeakeasyBase {
    contentType: string;
    createHitResponse?: shared.CreateHitResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
