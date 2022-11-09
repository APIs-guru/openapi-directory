import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchedVersion } from "./searchedversion";


// VersionSearchResults
/** 
 * Describes the response received when searching for artifacts.
**/
export class VersionSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=versions", elemType: shared.SearchedVersion })
  versions: SearchedVersion[];
}
