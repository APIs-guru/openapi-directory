import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Locale
/** 
 * The Locale data structure represents a geographical region or location.
**/
export class Locale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=Subdivision" })
  subdivision?: string;
}
