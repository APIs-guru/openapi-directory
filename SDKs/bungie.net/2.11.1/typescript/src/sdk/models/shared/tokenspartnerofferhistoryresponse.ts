import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokensPartnerOfferHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applyDate?: Date;

  @SpeakeasyMetadata()
  isConsumable?: boolean;

  @SpeakeasyMetadata()
  localizedDescription?: string;

  @SpeakeasyMetadata()
  localizedName?: string;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  partnerOfferKey?: string;

  @SpeakeasyMetadata()
  quantityApplied?: number;
}
