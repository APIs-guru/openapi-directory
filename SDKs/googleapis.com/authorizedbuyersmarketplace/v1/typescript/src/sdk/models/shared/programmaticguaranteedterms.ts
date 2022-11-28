import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";


export enum ProgrammaticGuaranteedTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}


// ProgrammaticGuaranteedTerms
/** 
 * Pricing terms for Programmatic Guaranteed Deals.
**/
export class ProgrammaticGuaranteedTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedPrice" })
  fixedPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @SpeakeasyMetadata({ data: "json, name=impressionCap" })
  impressionCap?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;

  @SpeakeasyMetadata({ data: "json, name=percentShareOfVoice" })
  percentShareOfVoice?: string;

  @SpeakeasyMetadata({ data: "json, name=reservationType" })
  reservationType?: ProgrammaticGuaranteedTermsReservationTypeEnum;
}
