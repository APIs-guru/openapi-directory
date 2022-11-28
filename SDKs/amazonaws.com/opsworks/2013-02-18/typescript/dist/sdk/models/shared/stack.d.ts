import { SpeakeasyBase } from "../../../internal/utils";
import { ChefConfiguration } from "./chefconfiguration";
import { StackConfigurationManager } from "./stackconfigurationmanager";
import { Source } from "./source";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
/**
 * Describes a stack.
**/
export declare class Stack extends SpeakeasyBase {
    agentVersion?: string;
    arn?: string;
    attributes?: Map<string, string>;
    chefConfiguration?: ChefConfiguration;
    configurationManager?: StackConfigurationManager;
    createdAt?: string;
    customCookbooksSource?: Source;
    customJson?: string;
    defaultAvailabilityZone?: string;
    defaultInstanceProfileArn?: string;
    defaultOs?: string;
    defaultRootDeviceType?: RootDeviceTypeEnum;
    defaultSshKeyName?: string;
    defaultSubnetId?: string;
    hostnameTheme?: string;
    name?: string;
    region?: string;
    serviceRoleArn?: string;
    stackId?: string;
    useCustomCookbooks?: boolean;
    useOpsworksSecurityGroups?: boolean;
    vpcId?: string;
}
