import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PackageNameList
/** 
 * A list of package names.
**/
export class PackageNameList extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageNames" })
  packageNames?: string[];
}
