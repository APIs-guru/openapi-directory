import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.
**/
export declare class UserIdentityRoot extends SpeakeasyBase {
    accountId?: string;
    arn?: string;
    principalId?: string;
}
