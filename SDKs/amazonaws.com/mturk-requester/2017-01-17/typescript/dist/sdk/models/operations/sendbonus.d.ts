import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendBonusXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendBonus = "MTurkRequesterServiceV20170117.SendBonus"
}
export declare class SendBonusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendBonusXAmzTargetEnum;
}
export declare class SendBonusRequest extends SpeakeasyBase {
    headers: SendBonusHeaders;
    request: shared.SendBonusRequest;
}
export declare class SendBonusResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    sendBonusResponse?: Map<string, any>;
    serviceFault?: any;
    statusCode: number;
}
