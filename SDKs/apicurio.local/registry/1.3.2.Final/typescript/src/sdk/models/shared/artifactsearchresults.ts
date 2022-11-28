import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchedArtifact } from "./searchedartifact";



// ArtifactSearchResults
/** 
 * Describes the response received when searching for artifacts.
**/
export class ArtifactSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: SearchedArtifact })
  artifacts: SearchedArtifact[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;
}
