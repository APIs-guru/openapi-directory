import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
export declare class DescribeFeatureGroupResponse extends SpeakeasyBase {
    creationTime: Date;
    description?: string;
    eventTimeFeatureName: string;
    failureReason?: string;
    featureDefinitions: FeatureDefinition[];
    featureGroupArn: string;
    featureGroupName: string;
    featureGroupStatus?: FeatureGroupStatusEnum;
    nextToken: string;
    offlineStoreConfig?: OfflineStoreConfig;
    offlineStoreStatus?: OfflineStoreStatus;
    onlineStoreConfig?: OnlineStoreConfig;
    recordIdentifierFeatureName: string;
    roleArn?: string;
}
