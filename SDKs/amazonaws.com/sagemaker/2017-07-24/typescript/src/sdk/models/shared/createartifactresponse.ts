import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;
}
