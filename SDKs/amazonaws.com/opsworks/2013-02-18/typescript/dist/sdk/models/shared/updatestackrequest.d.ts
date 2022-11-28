import { SpeakeasyBase } from "../../../internal/utils";
import { ChefConfiguration } from "./chefconfiguration";
import { StackConfigurationManager } from "./stackconfigurationmanager";
import { Source } from "./source";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
export declare class UpdateStackRequest extends SpeakeasyBase {
    agentVersion?: string;
    attributes?: Map<string, string>;
    chefConfiguration?: ChefConfiguration;
    configurationManager?: StackConfigurationManager;
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
    serviceRoleArn?: string;
    stackId: string;
    useCustomCookbooks?: boolean;
    useOpsworksSecurityGroups?: boolean;
}
