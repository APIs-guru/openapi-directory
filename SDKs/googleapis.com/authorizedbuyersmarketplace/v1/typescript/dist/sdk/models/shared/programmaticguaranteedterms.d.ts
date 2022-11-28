import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare enum ProgrammaticGuaranteedTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}
/**
 * Pricing terms for Programmatic Guaranteed Deals.
**/
export declare class ProgrammaticGuaranteedTerms extends SpeakeasyBase {
    fixedPrice?: Price;
    guaranteedLooks?: string;
    impressionCap?: string;
    minimumDailyLooks?: string;
    percentShareOfVoice?: string;
    reservationType?: ProgrammaticGuaranteedTermsReservationTypeEnum;
}
