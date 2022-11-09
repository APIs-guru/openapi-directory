import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TokensGetPartnerOfferSkuHistoryPathParams extends SpeakeasyBase {
    partnerApplicationId: number;
    targetBnetMembershipId: number;
}
export declare class TokensGetPartnerOfferSkuHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class TokensGetPartnerOfferSkuHistoryRequest extends SpeakeasyBase {
    pathParams: TokensGetPartnerOfferSkuHistoryPathParams;
    security: TokensGetPartnerOfferSkuHistorySecurity;
}
export declare class TokensGetPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
