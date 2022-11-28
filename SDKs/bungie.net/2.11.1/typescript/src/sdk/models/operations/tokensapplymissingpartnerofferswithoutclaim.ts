import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TokensApplyMissingPartnerOffersWithoutClaimPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerApplicationId" })
  partnerApplicationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetBnetMembershipId" })
  targetBnetMembershipId: number;
}


export class TokensApplyMissingPartnerOffersWithoutClaimSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class TokensApplyMissingPartnerOffersWithoutClaimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TokensApplyMissingPartnerOffersWithoutClaimPathParams;

  @SpeakeasyMetadata()
  security: TokensApplyMissingPartnerOffersWithoutClaimSecurity;
}


export class TokensApplyMissingPartnerOffersWithoutClaimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
