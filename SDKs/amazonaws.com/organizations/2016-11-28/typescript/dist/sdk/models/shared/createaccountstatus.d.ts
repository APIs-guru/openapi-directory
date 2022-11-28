import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountFailureReasonEnum } from "./createaccountfailurereasonenum";
import { CreateAccountStateEnum } from "./createaccountstateenum";
/**
 * Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
**/
export declare class CreateAccountStatus extends SpeakeasyBase {
    accountId?: string;
    accountName?: string;
    completedTimestamp?: Date;
    failureReason?: CreateAccountFailureReasonEnum;
    govCloudAccountId?: string;
    id?: string;
    requestedTimestamp?: Date;
    state?: CreateAccountStateEnum;
}
