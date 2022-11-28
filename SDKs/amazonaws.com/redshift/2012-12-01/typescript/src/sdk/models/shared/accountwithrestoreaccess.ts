import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountWithRestoreAccess
/** 
 * Describes an Amazon Web Services account authorized to restore a snapshot.
**/
export class AccountWithRestoreAccess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountAlias?: string;

  @SpeakeasyMetadata()
  accountId?: string;
}
