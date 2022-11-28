import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { Recipes } from "./recipes";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { LayerTypeEnum } from "./layertypeenum";
import { VolumeConfiguration } from "./volumeconfiguration";
export declare class CreateLayerRequest extends SpeakeasyBase {
    attributes?: Map<string, string>;
    autoAssignElasticIps?: boolean;
    autoAssignPublicIps?: boolean;
    cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    customInstanceProfileArn?: string;
    customJson?: string;
    customRecipes?: Recipes;
    customSecurityGroupIds?: string[];
    enableAutoHealing?: boolean;
    installUpdatesOnBoot?: boolean;
    lifecycleEventConfiguration?: LifecycleEventConfiguration;
    name: string;
    packages?: string[];
    shortname: string;
    stackId: string;
    type: LayerTypeEnum;
    useEbsOptimizedInstances?: boolean;
    volumeConfigurations?: VolumeConfiguration[];
}
