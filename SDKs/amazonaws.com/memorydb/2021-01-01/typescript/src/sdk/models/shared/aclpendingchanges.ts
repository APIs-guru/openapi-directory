import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AclPendingChanges
/** 
 * Returns the updates being applied to the ACL.
**/
export class AclPendingChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserNamesToAdd" })
  userNamesToAdd?: string[];

  @Metadata({ data: "json, name=UserNamesToRemove" })
  userNamesToRemove?: string[];
}
