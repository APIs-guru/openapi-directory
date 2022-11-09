import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";

export enum ProgrammaticGuaranteedTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Sponsorship = "SPONSORSHIP"
}


// ProgrammaticGuaranteedTerms
/** 
 * Pricing terms for Programmatic Guaranteed Deals.
**/
export class ProgrammaticGuaranteedTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedPrice" })
  fixedPrice?: Price;

  @Metadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @Metadata({ data: "json, name=impressionCap" })
  impressionCap?: string;

  @Metadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;

  @Metadata({ data: "json, name=percentShareOfVoice" })
  percentShareOfVoice?: string;

  @Metadata({ data: "json, name=reservationType" })
  reservationType?: ProgrammaticGuaranteedTermsReservationTypeEnum;
}
