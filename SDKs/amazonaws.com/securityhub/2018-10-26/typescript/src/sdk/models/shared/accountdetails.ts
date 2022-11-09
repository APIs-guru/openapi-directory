import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountDetails
/** 
 * The details of an Amazon Web Services account.
**/
export class AccountDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;
}
