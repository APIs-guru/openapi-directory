import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TokensClaimPartnerOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class TokensClaimPartnerOfferRequest extends SpeakeasyBase {
    security: TokensClaimPartnerOfferSecurity;
}
export declare class TokensClaimPartnerOfferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
