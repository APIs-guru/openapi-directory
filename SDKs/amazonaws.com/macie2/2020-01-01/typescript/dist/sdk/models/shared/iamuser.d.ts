import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.
**/
export declare class IamUser extends SpeakeasyBase {
    accountId?: string;
    arn?: string;
    principalId?: string;
    userName?: string;
}
