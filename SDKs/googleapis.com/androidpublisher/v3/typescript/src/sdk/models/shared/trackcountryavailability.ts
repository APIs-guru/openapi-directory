import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackTargetedCountry } from "./tracktargetedcountry";


// TrackCountryAvailability
/** 
 * Resource for per-track country availability information.
**/
export class TrackCountryAvailability extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.TrackTargetedCountry })
  countries?: TrackTargetedCountry[];

  @Metadata({ data: "json, name=restOfWorld" })
  restOfWorld?: boolean;

  @Metadata({ data: "json, name=syncWithProduction" })
  syncWithProduction?: boolean;
}
