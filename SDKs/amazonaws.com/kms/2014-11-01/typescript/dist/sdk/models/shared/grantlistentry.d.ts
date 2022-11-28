import { SpeakeasyBase } from "../../../internal/utils";
import { GrantConstraints } from "./grantconstraints";
import { GrantOperationEnum } from "./grantoperationenum";
/**
 * Contains information about a grant.
**/
export declare class GrantListEntry extends SpeakeasyBase {
    constraints?: GrantConstraints;
    creationDate?: Date;
    grantId?: string;
    granteePrincipal?: string;
    issuingAccount?: string;
    keyId?: string;
    name?: string;
    operations?: GrantOperationEnum[];
    retiringPrincipal?: string;
}
