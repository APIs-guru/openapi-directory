import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";


export class DescribeArtifactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @Metadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @Metadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}
