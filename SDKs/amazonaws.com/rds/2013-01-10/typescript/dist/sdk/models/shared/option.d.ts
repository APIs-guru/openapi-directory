import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
export declare class Option extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembership[];
    optionDescription?: string;
    optionName?: string;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
