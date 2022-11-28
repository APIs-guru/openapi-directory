import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PackageNameList
/** 
 * A list of package names.
**/
export class PackageNameList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageNames" })
  packageNames?: string[];
}
