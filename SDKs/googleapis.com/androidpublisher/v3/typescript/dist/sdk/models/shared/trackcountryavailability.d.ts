import { SpeakeasyBase } from "../../../internal/utils";
import { TrackTargetedCountry } from "./tracktargetedcountry";
/**
 * Resource for per-track country availability information.
**/
export declare class TrackCountryAvailability extends SpeakeasyBase {
    countries?: TrackTargetedCountry[];
    restOfWorld?: boolean;
    syncWithProduction?: boolean;
}
