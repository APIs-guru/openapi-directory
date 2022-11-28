import { SpeakeasyBase } from "../../../internal/utils";
import { TokensPartnerOfferHistoryResponse } from "./tokenspartnerofferhistoryresponse";
export declare class TokensPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
    allOffersApplied?: boolean;
    claimDate?: Date;
    localizedDescription?: string;
    localizedName?: string;
    skuIdentifier?: string;
    skuOffers?: TokensPartnerOfferHistoryResponse[];
    transactionId?: string;
}
