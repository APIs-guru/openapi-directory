import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { OptionSetting } from "./optionsetting";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * Option details.
**/
export declare class Option extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembership[];
    optionDescription?: string;
    optionName?: string;
    optionSettings?: OptionSetting[];
    optionVersion?: string;
    permanent?: boolean;
    persistent?: boolean;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
