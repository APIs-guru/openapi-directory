import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";


export enum GuaranteedFixedPriceTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}


// GuaranteedFixedPriceTerms
/** 
 * Terms for Programmatic Guaranteed Deals.
**/
export class GuaranteedFixedPriceTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedPrices", elemType: PricePerBuyer })
  fixedPrices?: PricePerBuyer[];

  @SpeakeasyMetadata({ data: "json, name=guaranteedImpressions" })
  guaranteedImpressions?: string;

  @SpeakeasyMetadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @SpeakeasyMetadata({ data: "json, name=impressionCap" })
  impressionCap?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;

  @SpeakeasyMetadata({ data: "json, name=percentShareOfVoice" })
  percentShareOfVoice?: string;

  @SpeakeasyMetadata({ data: "json, name=reservationType" })
  reservationType?: GuaranteedFixedPriceTermsReservationTypeEnum;
}
