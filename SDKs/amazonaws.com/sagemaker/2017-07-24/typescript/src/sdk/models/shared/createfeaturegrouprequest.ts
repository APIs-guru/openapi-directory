import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureDefinition } from "./featuredefinition";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";


export class CreateFeatureGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventTimeFeatureName" })
  eventTimeFeatureName: string;

  @Metadata({ data: "json, name=FeatureDefinitions", elemType: shared.FeatureDefinition })
  featureDefinitions: FeatureDefinition[];

  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=OfflineStoreConfig" })
  offlineStoreConfig?: OfflineStoreConfig;

  @Metadata({ data: "json, name=OnlineStoreConfig" })
  onlineStoreConfig?: OnlineStoreConfig;

  @Metadata({ data: "json, name=RecordIdentifierFeatureName" })
  recordIdentifierFeatureName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
