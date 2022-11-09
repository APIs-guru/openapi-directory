import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatus } from "./offlinestorestatus";


// FeatureGroupSummary
/** 
 * The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
**/
export class FeatureGroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;

  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=FeatureGroupStatus" })
  featureGroupStatus?: FeatureGroupStatusEnum;

  @Metadata({ data: "json, name=OfflineStoreStatus" })
  offlineStoreStatus?: OfflineStoreStatus;
}
