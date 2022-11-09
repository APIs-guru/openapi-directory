import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateArtifactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;
}
