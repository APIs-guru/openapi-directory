import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPutAssetPropertyError } from "./batchputassetpropertyerror";


// BatchPutAssetPropertyErrorEntry
/** 
 * Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
**/
export class BatchPutAssetPropertyErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryId" })
  entryId: string;

  @Metadata({ data: "json, name=errors", elemType: shared.BatchPutAssetPropertyError })
  errors: BatchPutAssetPropertyError[];
}
