import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteArtifactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;
}
