import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TokensPartnerOfferHistoryResponse } from "./tokenspartnerofferhistoryresponse";



export class TokensPartnerOfferSkuHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allOffersApplied?: boolean;

  @SpeakeasyMetadata()
  claimDate?: Date;

  @SpeakeasyMetadata()
  localizedDescription?: string;

  @SpeakeasyMetadata()
  localizedName?: string;

  @SpeakeasyMetadata()
  skuIdentifier?: string;

  @SpeakeasyMetadata({ elemType: TokensPartnerOfferHistoryResponse })
  skuOffers?: TokensPartnerOfferHistoryResponse[];

  @SpeakeasyMetadata()
  transactionId?: string;
}
