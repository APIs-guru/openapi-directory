import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChefConfiguration } from "./chefconfiguration";
import { StackConfigurationManager } from "./stackconfigurationmanager";
import { Source } from "./source";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";



export class UpdateStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ChefConfiguration" })
  chefConfiguration?: ChefConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @SpeakeasyMetadata({ data: "json, name=CustomCookbooksSource" })
  customCookbooksSource?: Source;

  @SpeakeasyMetadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAvailabilityZone" })
  defaultAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultInstanceProfileArn" })
  defaultInstanceProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultOs" })
  defaultOs?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultRootDeviceType" })
  defaultRootDeviceType?: RootDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DefaultSshKeyName" })
  defaultSshKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubnetId" })
  defaultSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=HostnameTheme" })
  hostnameTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;

  @SpeakeasyMetadata({ data: "json, name=UseCustomCookbooks" })
  useCustomCookbooks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseOpsworksSecurityGroups" })
  useOpsworksSecurityGroups?: boolean;
}
