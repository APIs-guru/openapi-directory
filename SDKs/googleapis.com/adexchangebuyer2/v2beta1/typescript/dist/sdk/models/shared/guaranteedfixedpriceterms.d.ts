import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
export declare enum GuaranteedFixedPriceTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}
/**
 * Terms for Programmatic Guaranteed Deals.
**/
export declare class GuaranteedFixedPriceTerms extends SpeakeasyBase {
    fixedPrices?: PricePerBuyer[];
    guaranteedImpressions?: string;
    guaranteedLooks?: string;
    impressionCap?: string;
    minimumDailyLooks?: string;
    percentShareOfVoice?: string;
    reservationType?: GuaranteedFixedPriceTermsReservationTypeEnum;
}
