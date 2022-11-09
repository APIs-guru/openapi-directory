import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";


export class DescribeFeatureGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventTimeFeatureName" })
  eventTimeFeatureName: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FeatureDefinitions", elemType: shared.FeatureDefinition })
  featureDefinitions: FeatureDefinition[];

  @Metadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;

  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=FeatureGroupStatus" })
  featureGroupStatus?: FeatureGroupStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken: string;

  @Metadata({ data: "json, name=OfflineStoreConfig" })
  offlineStoreConfig?: OfflineStoreConfig;

  @Metadata({ data: "json, name=OfflineStoreStatus" })
  offlineStoreStatus?: OfflineStoreStatus;

  @Metadata({ data: "json, name=OnlineStoreConfig" })
  onlineStoreConfig?: OnlineStoreConfig;

  @Metadata({ data: "json, name=RecordIdentifierFeatureName" })
  recordIdentifierFeatureName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
