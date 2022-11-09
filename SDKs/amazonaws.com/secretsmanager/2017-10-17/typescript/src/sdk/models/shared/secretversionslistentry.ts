import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretVersionsListEntry
/** 
 * A structure that contains information about one version of a secret.
**/
export class SecretVersionsListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=KmsKeyIds" })
  kmsKeyIds?: string[];

  @Metadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;

  @Metadata({ data: "json, name=VersionStages" })
  versionStages?: string[];
}
