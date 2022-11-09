import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetCompositeModel } from "./assetcompositemodel";
import { AssetHierarchy } from "./assethierarchy";
import { AssetProperty } from "./assetproperty";
import { AssetStatus } from "./assetstatus";


export class DescribeAssetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetArn" })
  assetArn: string;

  @Metadata({ data: "json, name=assetCompositeModels", elemType: shared.AssetCompositeModel })
  assetCompositeModels?: AssetCompositeModel[];

  @Metadata({ data: "json, name=assetCreationDate" })
  assetCreationDate: Date;

  @Metadata({ data: "json, name=assetHierarchies", elemType: shared.AssetHierarchy })
  assetHierarchies: AssetHierarchy[];

  @Metadata({ data: "json, name=assetId" })
  assetId: string;

  @Metadata({ data: "json, name=assetLastUpdateDate" })
  assetLastUpdateDate: Date;

  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=assetName" })
  assetName: string;

  @Metadata({ data: "json, name=assetProperties", elemType: shared.AssetProperty })
  assetProperties: AssetProperty[];

  @Metadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
