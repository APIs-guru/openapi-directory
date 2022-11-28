import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountDetails
/** 
 * The details of an Amazon Web Services account.
**/
export class AccountDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;
}
