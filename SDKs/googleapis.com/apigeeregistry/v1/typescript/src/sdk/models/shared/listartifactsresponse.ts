import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Artifact } from "./artifact";


// ListArtifactsResponse
/** 
 * Response message for ListArtifacts.
**/
export class ListArtifactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts?: Artifact[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
