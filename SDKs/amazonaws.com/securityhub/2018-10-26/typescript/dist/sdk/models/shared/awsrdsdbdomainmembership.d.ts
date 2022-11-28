import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Active Directory domain membership record associated with the DB instance.
**/
export declare class AwsRdsDbDomainMembership extends SpeakeasyBase {
    domain?: string;
    fqdn?: string;
    iamRoleName?: string;
    status?: string;
}
