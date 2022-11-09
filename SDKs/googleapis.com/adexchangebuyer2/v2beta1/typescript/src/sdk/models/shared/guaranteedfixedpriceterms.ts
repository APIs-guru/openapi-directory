import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricePerBuyer } from "./priceperbuyer";

export enum GuaranteedFixedPriceTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Sponsorship = "SPONSORSHIP"
}


// GuaranteedFixedPriceTerms
/** 
 * Terms for Programmatic Guaranteed Deals.
**/
export class GuaranteedFixedPriceTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedPrices", elemType: shared.PricePerBuyer })
  fixedPrices?: PricePerBuyer[];

  @Metadata({ data: "json, name=guaranteedImpressions" })
  guaranteedImpressions?: string;

  @Metadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @Metadata({ data: "json, name=impressionCap" })
  impressionCap?: string;

  @Metadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;

  @Metadata({ data: "json, name=percentShareOfVoice" })
  percentShareOfVoice?: string;

  @Metadata({ data: "json, name=reservationType" })
  reservationType?: GuaranteedFixedPriceTermsReservationTypeEnum;
}
