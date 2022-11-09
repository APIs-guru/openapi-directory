import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";
import { Tag } from "./tag";


export class CreateArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @Metadata({ data: "json, name=ArtifactType" })
  artifactType: string;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source: ArtifactSource;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
