import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Country } from "./country";


// CountryList
/** 
 * Countries List
**/
export class CountryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.Country })
  countries: Country[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
