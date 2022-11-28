import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendAlexaOfferToMasterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendAlexaOfferToMasterRequestBody extends SpeakeasyBase {
    channelArn: string;
    messagePayload: string;
    senderClientId: string;
}
export declare class SendAlexaOfferToMasterRequest extends SpeakeasyBase {
    headers: SendAlexaOfferToMasterHeaders;
    request: SendAlexaOfferToMasterRequestBody;
}
export declare class SendAlexaOfferToMasterResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    sendAlexaOfferToMasterResponse?: shared.SendAlexaOfferToMasterResponse;
    statusCode: number;
}
