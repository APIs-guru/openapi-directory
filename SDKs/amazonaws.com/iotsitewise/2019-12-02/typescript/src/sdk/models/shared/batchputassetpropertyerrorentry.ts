import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutAssetPropertyError } from "./batchputassetpropertyerror";



// BatchPutAssetPropertyErrorEntry
/** 
 * Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
**/
export class BatchPutAssetPropertyErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryId" })
  entryId: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchPutAssetPropertyError })
  errors: BatchPutAssetPropertyError[];
}
