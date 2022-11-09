import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Locale
/** 
 * The Locale data structure represents a geographical region or location.
**/
export class Locale extends SpeakeasyBase {
  @Metadata({ data: "json, name=Country" })
  country: string;

  @Metadata({ data: "json, name=Subdivision" })
  subdivision?: string;
}
