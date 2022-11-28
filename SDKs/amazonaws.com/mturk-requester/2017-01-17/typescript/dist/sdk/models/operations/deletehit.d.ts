import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteHit = "MTurkRequesterServiceV20170117.DeleteHIT"
}
export declare class DeleteHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHitxAmzTargetEnum;
}
export declare class DeleteHitRequest extends SpeakeasyBase {
    headers: DeleteHitHeaders;
    request: shared.DeleteHitRequest;
}
export declare class DeleteHitResponse extends SpeakeasyBase {
    contentType: string;
    deleteHitResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
