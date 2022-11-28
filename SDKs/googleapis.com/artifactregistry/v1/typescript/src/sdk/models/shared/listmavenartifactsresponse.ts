import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MavenArtifact } from "./mavenartifact";



// ListMavenArtifactsResponse
/** 
 * The response from listing maven artifacts.
**/
export class ListMavenArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mavenArtifacts", elemType: MavenArtifact })
  mavenArtifacts?: MavenArtifact[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
