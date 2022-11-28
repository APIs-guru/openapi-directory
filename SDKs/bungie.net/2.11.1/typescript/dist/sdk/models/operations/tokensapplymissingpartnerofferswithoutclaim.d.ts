import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TokensApplyMissingPartnerOffersWithoutClaimPathParams extends SpeakeasyBase {
    partnerApplicationId: number;
    targetBnetMembershipId: number;
}
export declare class TokensApplyMissingPartnerOffersWithoutClaimSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class TokensApplyMissingPartnerOffersWithoutClaimRequest extends SpeakeasyBase {
    pathParams: TokensApplyMissingPartnerOffersWithoutClaimPathParams;
    security: TokensApplyMissingPartnerOffersWithoutClaimSecurity;
}
export declare class TokensApplyMissingPartnerOffersWithoutClaimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
