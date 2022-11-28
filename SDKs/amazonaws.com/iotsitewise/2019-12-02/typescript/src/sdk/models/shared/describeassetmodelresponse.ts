import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetModelCompositeModel } from "./assetmodelcompositemodel";
import { AssetModelHierarchy } from "./assetmodelhierarchy";
import { AssetModelProperty } from "./assetmodelproperty";
import { AssetModelStatus } from "./assetmodelstatus";



export class DescribeAssetModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelArn" })
  assetModelArn: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelCompositeModels", elemType: AssetModelCompositeModel })
  assetModelCompositeModels?: AssetModelCompositeModel[];

  @SpeakeasyMetadata({ data: "json, name=assetModelCreationDate" })
  assetModelCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=assetModelDescription" })
  assetModelDescription: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelHierarchies", elemType: AssetModelHierarchy })
  assetModelHierarchies: AssetModelHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelLastUpdateDate" })
  assetModelLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelProperties", elemType: AssetModelProperty })
  assetModelProperties: AssetModelProperty[];

  @SpeakeasyMetadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
