import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchedVersion } from "./searchedversion";



// VersionSearchResults
/** 
 * Describes the response received when searching for artifacts.
**/
export class VersionSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: SearchedVersion })
  versions: SearchedVersion[];
}
