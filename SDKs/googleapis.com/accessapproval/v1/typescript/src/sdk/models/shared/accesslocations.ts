import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessLocations
/** 
 * Home office and physical location of the principal.
**/
export class AccessLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=principalOfficeCountry" })
  principalOfficeCountry?: string;

  @Metadata({ data: "json, name=principalPhysicalLocationCountry" })
  principalPhysicalLocationCountry?: string;
}
