import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetModelStatus } from "./assetmodelstatus";


// AssetModelSummary
/** 
 * Contains a summary of an asset model.
**/
export class AssetModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: AssetModelStatus;
}
