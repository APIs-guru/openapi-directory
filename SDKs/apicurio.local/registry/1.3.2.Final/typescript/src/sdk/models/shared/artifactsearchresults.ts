import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchedArtifact } from "./searchedartifact";


// ArtifactSearchResults
/** 
 * Describes the response received when searching for artifacts.
**/
export class ArtifactSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.SearchedArtifact })
  artifacts: SearchedArtifact[];

  @Metadata({ data: "json, name=count" })
  count: number;
}
