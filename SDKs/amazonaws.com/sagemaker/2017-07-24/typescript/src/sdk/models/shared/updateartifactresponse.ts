import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;
}
