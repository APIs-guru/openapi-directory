import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Active Directory Domain membership record associated with a DB instance.
**/
export declare class DomainMembership extends SpeakeasyBase {
    domain?: string;
    fqdn?: string;
    iamRoleName?: string;
    status?: string;
}
