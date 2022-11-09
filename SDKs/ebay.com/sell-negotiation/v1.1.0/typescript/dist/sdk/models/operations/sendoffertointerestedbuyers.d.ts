import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendOfferToInterestedBuyersHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class SendOfferToInterestedBuyersSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class SendOfferToInterestedBuyersRequest extends SpeakeasyBase {
    headers: SendOfferToInterestedBuyersHeaders;
    request?: shared.CreateOffersRequest;
    security: SendOfferToInterestedBuyersSecurity;
}
export declare class SendOfferToInterestedBuyersResponse extends SpeakeasyBase {
    contentType: string;
    sendOfferToInterestedBuyersCollectionResponse?: shared.SendOfferToInterestedBuyersCollectionResponse;
    statusCode: number;
}
