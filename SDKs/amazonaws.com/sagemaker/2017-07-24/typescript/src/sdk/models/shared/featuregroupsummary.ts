import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatus } from "./offlinestorestatus";



// FeatureGroupSummary
/** 
 * The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
**/
export class FeatureGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupStatus" })
  featureGroupStatus?: FeatureGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=OfflineStoreStatus" })
  offlineStoreStatus?: OfflineStoreStatus;
}
