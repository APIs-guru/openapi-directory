import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];
}
