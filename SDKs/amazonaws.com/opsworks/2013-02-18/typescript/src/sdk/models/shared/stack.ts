import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChefConfiguration } from "./chefconfiguration";
import { StackConfigurationManager } from "./stackconfigurationmanager";
import { Source } from "./source";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";


// Stack
/** 
 * Describes a stack.
**/
export class Stack extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=ChefConfiguration" })
  chefConfiguration?: ChefConfiguration;

  @Metadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=CustomCookbooksSource" })
  customCookbooksSource?: Source;

  @Metadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @Metadata({ data: "json, name=DefaultAvailabilityZone" })
  defaultAvailabilityZone?: string;

  @Metadata({ data: "json, name=DefaultInstanceProfileArn" })
  defaultInstanceProfileArn?: string;

  @Metadata({ data: "json, name=DefaultOs" })
  defaultOs?: string;

  @Metadata({ data: "json, name=DefaultRootDeviceType" })
  defaultRootDeviceType?: RootDeviceTypeEnum;

  @Metadata({ data: "json, name=DefaultSshKeyName" })
  defaultSshKeyName?: string;

  @Metadata({ data: "json, name=DefaultSubnetId" })
  defaultSubnetId?: string;

  @Metadata({ data: "json, name=HostnameTheme" })
  hostnameTheme?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=UseCustomCookbooks" })
  useCustomCookbooks?: boolean;

  @Metadata({ data: "json, name=UseOpsworksSecurityGroups" })
  useOpsworksSecurityGroups?: boolean;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
