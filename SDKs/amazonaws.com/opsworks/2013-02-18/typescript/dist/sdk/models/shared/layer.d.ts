import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { Recipes } from "./recipes";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { LayerTypeEnum } from "./layertypeenum";
import { VolumeConfiguration } from "./volumeconfiguration";
/**
 * Describes a layer.
**/
export declare class Layer extends SpeakeasyBase {
    arn?: string;
    attributes?: Map<string, string>;
    autoAssignElasticIps?: boolean;
    autoAssignPublicIps?: boolean;
    cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    createdAt?: string;
    customInstanceProfileArn?: string;
    customJson?: string;
    customRecipes?: Recipes;
    customSecurityGroupIds?: string[];
    defaultRecipes?: Recipes;
    defaultSecurityGroupNames?: string[];
    enableAutoHealing?: boolean;
    installUpdatesOnBoot?: boolean;
    layerId?: string;
    lifecycleEventConfiguration?: LifecycleEventConfiguration;
    name?: string;
    packages?: string[];
    shortname?: string;
    stackId?: string;
    type?: LayerTypeEnum;
    useEbsOptimizedInstances?: boolean;
    volumeConfigurations?: VolumeConfiguration[];
}
