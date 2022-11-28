import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStatus } from "./assetmodelstatus";



// AssetModelSummary
/** 
 * Contains a summary of an asset model.
**/
export class AssetModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AssetModelStatus;
}
