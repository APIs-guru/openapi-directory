import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackTargetedCountry } from "./tracktargetedcountry";



// TrackCountryAvailability
/** 
 * Resource for per-track country availability information.
**/
export class TrackCountryAvailability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: TrackTargetedCountry })
  countries?: TrackTargetedCountry[];

  @SpeakeasyMetadata({ data: "json, name=restOfWorld" })
  restOfWorld?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syncWithProduction" })
  syncWithProduction?: boolean;
}
