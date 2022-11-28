import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";



export class CreateFeatureGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTimeFeatureName" })
  eventTimeFeatureName: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureDefinitions", elemType: FeatureDefinition })
  featureDefinitions: FeatureDefinition[];

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=OfflineStoreConfig" })
  offlineStoreConfig?: OfflineStoreConfig;

  @SpeakeasyMetadata({ data: "json, name=OnlineStoreConfig" })
  onlineStoreConfig?: OnlineStoreConfig;

  @SpeakeasyMetadata({ data: "json, name=RecordIdentifierFeatureName" })
  recordIdentifierFeatureName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
