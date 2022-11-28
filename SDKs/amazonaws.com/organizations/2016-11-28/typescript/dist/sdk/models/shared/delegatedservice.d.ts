import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the AWS service for which the account is a delegated administrator.
**/
export declare class DelegatedService extends SpeakeasyBase {
    delegationEnabledDate?: Date;
    servicePrincipal?: string;
}
