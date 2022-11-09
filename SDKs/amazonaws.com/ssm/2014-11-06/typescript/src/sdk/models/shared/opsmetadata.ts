import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsMetadata
/** 
 * Operational metadata for an application in Application Manager.
**/
export class OpsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=LastModifiedUser" })
  lastModifiedUser?: string;

  @Metadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
