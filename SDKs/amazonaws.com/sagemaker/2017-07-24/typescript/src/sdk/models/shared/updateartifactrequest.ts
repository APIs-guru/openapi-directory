import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn: string;

  @Metadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=PropertiesToRemove" })
  propertiesToRemove?: string[];
}
