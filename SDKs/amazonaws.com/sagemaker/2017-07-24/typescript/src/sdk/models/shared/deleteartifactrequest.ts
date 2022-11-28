import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSource } from "./artifactsource";



export class DeleteArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}
