import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactSource } from "./artifactsource";


export class DeleteArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @Metadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}
