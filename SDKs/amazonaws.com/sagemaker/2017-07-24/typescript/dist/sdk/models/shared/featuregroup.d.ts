import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";
/**
 * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
**/
export declare class FeatureGroup extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    eventTimeFeatureName?: string;
    failureReason?: string;
    featureDefinitions?: FeatureDefinition[];
    featureGroupArn?: string;
    featureGroupName?: string;
    featureGroupStatus?: FeatureGroupStatusEnum;
    offlineStoreConfig?: OfflineStoreConfig;
    offlineStoreStatus?: OfflineStoreStatus;
    onlineStoreConfig?: OnlineStoreConfig;
    recordIdentifierFeatureName?: string;
    roleArn?: string;
    tags?: Tag[];
}
