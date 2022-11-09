import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingModifiedRelationalDatabaseValues
/** 
 * Describes a pending database value modification.
**/
export class PendingModifiedRelationalDatabaseValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupRetentionEnabled" })
  backupRetentionEnabled?: boolean;

  @Metadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;
}
