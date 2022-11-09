import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TokensClaimPartnerOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class TokensClaimPartnerOfferRequest extends SpeakeasyBase {
  @Metadata()
  security: TokensClaimPartnerOfferSecurity;
}


export class TokensClaimPartnerOfferResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
