import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { Recipes } from "./recipes";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { VolumeConfiguration } from "./volumeconfiguration";



export class UpdateLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=AutoAssignElasticIps" })
  autoAssignElasticIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoAssignPublicIps" })
  autoAssignPublicIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsConfiguration" })
  cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CustomInstanceProfileArn" })
  customInstanceProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomRecipes" })
  customRecipes?: Recipes;

  @SpeakeasyMetadata({ data: "json, name=CustomSecurityGroupIds" })
  customSecurityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableAutoHealing" })
  enableAutoHealing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" })
  installUpdatesOnBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId: string;

  @SpeakeasyMetadata({ data: "json, name=LifecycleEventConfiguration" })
  lifecycleEventConfiguration?: LifecycleEventConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Packages" })
  packages?: string[];

  @SpeakeasyMetadata({ data: "json, name=Shortname" })
  shortname?: string;

  @SpeakeasyMetadata({ data: "json, name=UseEbsOptimizedInstances" })
  useEbsOptimizedInstances?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VolumeConfigurations", elemType: VolumeConfiguration })
  volumeConfigurations?: VolumeConfiguration[];
}
