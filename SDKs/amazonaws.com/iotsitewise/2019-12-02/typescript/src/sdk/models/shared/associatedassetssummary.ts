import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetHierarchy } from "./assethierarchy";
import { AssetStatus } from "./assetstatus";


// AssociatedAssetsSummary
/** 
 * Contains a summary of an associated asset.
**/
export class AssociatedAssetsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=hierarchies", elemType: shared.AssetHierarchy })
  hierarchies: AssetHierarchy[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: AssetStatus;
}
