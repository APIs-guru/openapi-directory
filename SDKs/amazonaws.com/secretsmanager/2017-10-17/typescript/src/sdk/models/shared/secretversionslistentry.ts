import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretVersionsListEntry
/** 
 * A structure that contains information about one version of a secret.
**/
export class SecretVersionsListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyIds" })
  kmsKeyIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionStages" })
  versionStages?: string[];
}
