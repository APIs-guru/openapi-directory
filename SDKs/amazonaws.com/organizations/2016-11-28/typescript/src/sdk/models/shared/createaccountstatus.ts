import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountFailureReasonEnum } from "./createaccountfailurereasonenum";
import { CreateAccountStateEnum } from "./createaccountstateenum";



// CreateAccountStatus
/** 
 * Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
**/
export class CreateAccountStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedTimestamp" })
  completedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: CreateAccountFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=GovCloudAccountId" })
  govCloudAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedTimestamp" })
  requestedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CreateAccountStateEnum;
}
