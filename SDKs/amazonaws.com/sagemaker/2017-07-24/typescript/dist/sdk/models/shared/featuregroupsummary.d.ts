import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatus } from "./offlinestorestatus";
/**
 * The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
**/
export declare class FeatureGroupSummary extends SpeakeasyBase {
    creationTime: Date;
    featureGroupArn: string;
    featureGroupName: string;
    featureGroupStatus?: FeatureGroupStatusEnum;
    offlineStoreStatus?: OfflineStoreStatus;
}
