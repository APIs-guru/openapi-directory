import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateAccountFailureReasonEnum } from "./createaccountfailurereasonenum";
import { CreateAccountStateEnum } from "./createaccountstateenum";


// CreateAccountStatus
/** 
 * Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
**/
export class CreateAccountStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=CompletedTimestamp" })
  completedTimestamp?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: CreateAccountFailureReasonEnum;

  @Metadata({ data: "json, name=GovCloudAccountId" })
  govCloudAccountId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=RequestedTimestamp" })
  requestedTimestamp?: Date;

  @Metadata({ data: "json, name=State" })
  state?: CreateAccountStateEnum;
}
