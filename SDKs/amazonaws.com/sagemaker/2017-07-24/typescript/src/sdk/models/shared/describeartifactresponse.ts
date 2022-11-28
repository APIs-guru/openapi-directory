import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";



export class DescribeArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}
