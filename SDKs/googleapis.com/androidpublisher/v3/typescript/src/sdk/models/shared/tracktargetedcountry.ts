import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackTargetedCountry
/** 
 * Representation of a single country where the contents of a track are available.
**/
export class TrackTargetedCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;
}
