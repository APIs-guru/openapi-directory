import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackTargetedCountry
/** 
 * Representation of a single country where the contents of a track are available.
**/
export class TrackTargetedCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;
}
