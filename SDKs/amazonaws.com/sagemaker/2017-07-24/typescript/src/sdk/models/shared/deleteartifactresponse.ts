import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;
}
