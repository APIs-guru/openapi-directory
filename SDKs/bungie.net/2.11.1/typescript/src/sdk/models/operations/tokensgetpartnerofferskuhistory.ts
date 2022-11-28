import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TokensGetPartnerOfferSkuHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerApplicationId" })
  partnerApplicationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetBnetMembershipId" })
  targetBnetMembershipId: number;
}


export class TokensGetPartnerOfferSkuHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class TokensGetPartnerOfferSkuHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TokensGetPartnerOfferSkuHistoryPathParams;

  @SpeakeasyMetadata()
  security: TokensGetPartnerOfferSkuHistorySecurity;
}


export class TokensGetPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
