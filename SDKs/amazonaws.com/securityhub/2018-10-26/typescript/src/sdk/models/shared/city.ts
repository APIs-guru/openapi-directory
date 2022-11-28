import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// City
/** 
 * Information about a city.
**/
export class City extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CityName" })
  cityName?: string;
}
