import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingModifiedRelationalDatabaseValues
/** 
 * Describes a pending database value modification.
**/
export class PendingModifiedRelationalDatabaseValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupRetentionEnabled" })
  backupRetentionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;
}
