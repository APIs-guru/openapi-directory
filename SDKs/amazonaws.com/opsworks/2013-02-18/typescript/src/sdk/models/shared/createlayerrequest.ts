import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { Recipes } from "./recipes";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { LayerTypeEnum } from "./layertypeenum";
import { VolumeConfiguration } from "./volumeconfiguration";


export class CreateLayerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=AutoAssignElasticIps" })
  autoAssignElasticIps?: boolean;

  @Metadata({ data: "json, name=AutoAssignPublicIps" })
  autoAssignPublicIps?: boolean;

  @Metadata({ data: "json, name=CloudWatchLogsConfiguration" })
  cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  @Metadata({ data: "json, name=CustomInstanceProfileArn" })
  customInstanceProfileArn?: string;

  @Metadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @Metadata({ data: "json, name=CustomRecipes" })
  customRecipes?: Recipes;

  @Metadata({ data: "json, name=CustomSecurityGroupIds" })
  customSecurityGroupIds?: string[];

  @Metadata({ data: "json, name=EnableAutoHealing" })
  enableAutoHealing?: boolean;

  @Metadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @Metadata({ data: "json, name=LifecycleEventConfiguration" })
  lifecycleEventConfiguration?: LifecycleEventConfiguration;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Packages" })
  packages?: string[];

  @Metadata({ data: "json, name=Shortname" })
  shortname: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;

  @Metadata({ data: "json, name=Type" })
  type: LayerTypeEnum;

  @Metadata({ data: "json, name=UseEbsOptimizedInstances" })
  useEbsOptimizedInstances?: boolean;

  @Metadata({ data: "json, name=VolumeConfigurations", elemType: shared.VolumeConfiguration })
  volumeConfigurations?: VolumeConfiguration[];
}
