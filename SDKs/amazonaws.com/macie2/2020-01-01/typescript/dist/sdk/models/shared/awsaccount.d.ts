import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.
**/
export declare class AwsAccount extends SpeakeasyBase {
    accountId?: string;
    principalId?: string;
}
