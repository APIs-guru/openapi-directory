import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";
export declare class CreateFeatureGroupRequest extends SpeakeasyBase {
    description?: string;
    eventTimeFeatureName: string;
    featureDefinitions: FeatureDefinition[];
    featureGroupName: string;
    offlineStoreConfig?: OfflineStoreConfig;
    onlineStoreConfig?: OnlineStoreConfig;
    recordIdentifierFeatureName: string;
    roleArn?: string;
    tags?: Tag[];
}
