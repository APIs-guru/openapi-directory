import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";
import { Tag } from "./tag";



export class CreateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: ArtifactSource;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
