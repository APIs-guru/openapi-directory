import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountSharingInfo
/** 
 * Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.
**/
export class AccountSharingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedDocumentVersion" })
  sharedDocumentVersion?: string;
}
