import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AclPendingChanges
/** 
 * Returns the updates being applied to the ACL.
**/
export class AclPendingChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserNamesToAdd" })
  userNamesToAdd?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserNamesToRemove" })
  userNamesToRemove?: string[];
}
