import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MavenArtifact } from "./mavenartifact";


// ListMavenArtifactsResponse
/** 
 * The response from listing maven artifacts.
**/
export class ListMavenArtifactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mavenArtifacts", elemType: shared.MavenArtifact })
  mavenArtifacts?: MavenArtifact[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
