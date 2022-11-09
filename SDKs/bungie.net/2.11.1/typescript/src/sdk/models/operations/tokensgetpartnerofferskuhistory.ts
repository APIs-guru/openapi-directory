import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TokensGetPartnerOfferSkuHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=partnerApplicationId" })
  partnerApplicationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetBnetMembershipId" })
  targetBnetMembershipId: number;
}


export class TokensGetPartnerOfferSkuHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class TokensGetPartnerOfferSkuHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TokensGetPartnerOfferSkuHistoryPathParams;

  @Metadata()
  security: TokensGetPartnerOfferSkuHistorySecurity;
}


export class TokensGetPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
