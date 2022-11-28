import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendOfferToInterestedBuyersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class SendOfferToInterestedBuyersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class SendOfferToInterestedBuyersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendOfferToInterestedBuyersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CreateOffersRequest;

  @SpeakeasyMetadata()
  security: SendOfferToInterestedBuyersSecurity;
}


export class SendOfferToInterestedBuyersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sendOfferToInterestedBuyersCollectionResponse?: shared.SendOfferToInterestedBuyersCollectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
