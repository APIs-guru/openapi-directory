import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsMetadata
/** 
 * Operational metadata for an application in Application Manager.
**/
export class OpsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedUser" })
  lastModifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsMetadataArn" })
  opsMetadataArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
