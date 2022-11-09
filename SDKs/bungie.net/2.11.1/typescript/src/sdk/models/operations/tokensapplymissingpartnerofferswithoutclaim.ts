import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TokensApplyMissingPartnerOffersWithoutClaimPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=partnerApplicationId" })
  partnerApplicationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetBnetMembershipId" })
  targetBnetMembershipId: number;
}


export class TokensApplyMissingPartnerOffersWithoutClaimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class TokensApplyMissingPartnerOffersWithoutClaimRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TokensApplyMissingPartnerOffersWithoutClaimPathParams;

  @Metadata()
  security: TokensApplyMissingPartnerOffersWithoutClaimSecurity;
}


export class TokensApplyMissingPartnerOffersWithoutClaimResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
