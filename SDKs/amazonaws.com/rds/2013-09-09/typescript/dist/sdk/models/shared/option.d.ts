import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { OptionSetting } from "./optionsetting";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
export declare class Option extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembership[];
    optionDescription?: string;
    optionName?: string;
    optionSettings?: OptionSetting[];
    permanent?: boolean;
    persistent?: boolean;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}
