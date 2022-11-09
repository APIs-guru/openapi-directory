import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountSharingInfo
/** 
 * Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.
**/
export class AccountSharingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=SharedDocumentVersion" })
  sharedDocumentVersion?: string;
}
