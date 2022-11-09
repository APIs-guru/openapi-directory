import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// City
/** 
 * Information about a city.
**/
export class City extends SpeakeasyBase {
  @Metadata({ data: "json, name=CityName" })
  cityName?: string;
}
