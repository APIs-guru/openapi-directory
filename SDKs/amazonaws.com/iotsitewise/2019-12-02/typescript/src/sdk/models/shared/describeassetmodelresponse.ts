import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetModelCompositeModel } from "./assetmodelcompositemodel";
import { AssetModelHierarchy } from "./assetmodelhierarchy";
import { AssetModelProperty } from "./assetmodelproperty";
import { AssetModelStatus } from "./assetmodelstatus";


export class DescribeAssetModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelArn" })
  assetModelArn: string;

  @Metadata({ data: "json, name=assetModelCompositeModels", elemType: shared.AssetModelCompositeModel })
  assetModelCompositeModels?: AssetModelCompositeModel[];

  @Metadata({ data: "json, name=assetModelCreationDate" })
  assetModelCreationDate: Date;

  @Metadata({ data: "json, name=assetModelDescription" })
  assetModelDescription: string;

  @Metadata({ data: "json, name=assetModelHierarchies", elemType: shared.AssetModelHierarchy })
  assetModelHierarchies: AssetModelHierarchy[];

  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=assetModelLastUpdateDate" })
  assetModelLastUpdateDate: Date;

  @Metadata({ data: "json, name=assetModelName" })
  assetModelName: string;

  @Metadata({ data: "json, name=assetModelProperties", elemType: shared.AssetModelProperty })
  assetModelProperties: AssetModelProperty[];

  @Metadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
