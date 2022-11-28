import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";



export class DescribeFeatureGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTimeFeatureName" })
  eventTimeFeatureName: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureDefinitions", elemType: FeatureDefinition })
  featureDefinitions: FeatureDefinition[];

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupStatus" })
  featureGroupStatus?: FeatureGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken: string;

  @SpeakeasyMetadata({ data: "json, name=OfflineStoreConfig" })
  offlineStoreConfig?: OfflineStoreConfig;

  @SpeakeasyMetadata({ data: "json, name=OfflineStoreStatus" })
  offlineStoreStatus?: OfflineStoreStatus;

  @SpeakeasyMetadata({ data: "json, name=OnlineStoreConfig" })
  onlineStoreConfig?: OnlineStoreConfig;

  @SpeakeasyMetadata({ data: "json, name=RecordIdentifierFeatureName" })
  recordIdentifierFeatureName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
