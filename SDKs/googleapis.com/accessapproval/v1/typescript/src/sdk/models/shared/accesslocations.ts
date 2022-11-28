import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessLocations
/** 
 * Home office and physical location of the principal.
**/
export class AccessLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=principalOfficeCountry" })
  principalOfficeCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=principalPhysicalLocationCountry" })
  principalPhysicalLocationCountry?: string;
}
