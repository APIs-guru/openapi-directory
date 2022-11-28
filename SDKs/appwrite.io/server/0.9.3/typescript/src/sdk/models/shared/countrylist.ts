import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";



// CountryList
/** 
 * Countries List
**/
export class CountryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: Country })
  countries: Country[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
