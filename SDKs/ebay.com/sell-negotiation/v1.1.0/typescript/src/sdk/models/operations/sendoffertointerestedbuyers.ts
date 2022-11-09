import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendOfferToInterestedBuyersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class SendOfferToInterestedBuyersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class SendOfferToInterestedBuyersRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendOfferToInterestedBuyersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CreateOffersRequest;

  @Metadata()
  security: SendOfferToInterestedBuyersSecurity;
}


export class SendOfferToInterestedBuyersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sendOfferToInterestedBuyersCollectionResponse?: shared.SendOfferToInterestedBuyersCollectionResponse;

  @Metadata()
  statusCode: number;
}
