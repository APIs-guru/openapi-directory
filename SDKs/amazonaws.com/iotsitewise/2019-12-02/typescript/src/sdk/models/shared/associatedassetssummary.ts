import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetHierarchy } from "./assethierarchy";
import { AssetStatus } from "./assetstatus";



// AssociatedAssetsSummary
/** 
 * Contains a summary of an associated asset.
**/
export class AssociatedAssetsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=hierarchies", elemType: AssetHierarchy })
  hierarchies: AssetHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AssetStatus;
}
