import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetCompositeModel } from "./assetcompositemodel";
import { AssetHierarchy } from "./assethierarchy";
import { AssetProperty } from "./assetproperty";
import { AssetStatus } from "./assetstatus";



export class DescribeAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetArn" })
  assetArn: string;

  @SpeakeasyMetadata({ data: "json, name=assetCompositeModels", elemType: AssetCompositeModel })
  assetCompositeModels?: AssetCompositeModel[];

  @SpeakeasyMetadata({ data: "json, name=assetCreationDate" })
  assetCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=assetHierarchies", elemType: AssetHierarchy })
  assetHierarchies: AssetHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId: string;

  @SpeakeasyMetadata({ data: "json, name=assetLastUpdateDate" })
  assetLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=assetName" })
  assetName: string;

  @SpeakeasyMetadata({ data: "json, name=assetProperties", elemType: AssetProperty })
  assetProperties: AssetProperty[];

  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
