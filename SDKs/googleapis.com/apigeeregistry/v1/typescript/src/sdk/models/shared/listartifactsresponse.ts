import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";



// ListArtifactsResponse
/** 
 * Response message for ListArtifacts.
**/
export class ListArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: Artifact })
  artifacts?: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
