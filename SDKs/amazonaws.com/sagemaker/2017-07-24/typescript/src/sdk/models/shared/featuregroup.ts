import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";


// FeatureGroup
/** 
 * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
**/
export class FeatureGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventTimeFeatureName" })
  eventTimeFeatureName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FeatureDefinitions", elemType: shared.FeatureDefinition })
  featureDefinitions?: FeatureDefinition[];

  @Metadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn?: string;

  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName?: string;

  @Metadata({ data: "json, name=FeatureGroupStatus" })
  featureGroupStatus?: FeatureGroupStatusEnum;

  @Metadata({ data: "json, name=OfflineStoreConfig" })
  offlineStoreConfig?: OfflineStoreConfig;

  @Metadata({ data: "json, name=OfflineStoreStatus" })
  offlineStoreStatus?: OfflineStoreStatus;

  @Metadata({ data: "json, name=OnlineStoreConfig" })
  onlineStoreConfig?: OnlineStoreConfig;

  @Metadata({ data: "json, name=RecordIdentifierFeatureName" })
  recordIdentifierFeatureName?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
