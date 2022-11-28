import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutAssetPropertyValueErrorCodeEnum } from "./batchputassetpropertyvalueerrorcodeenum";
import { TimeInNanos } from "./timeinnanos";



// BatchPutAssetPropertyError
/** 
 * Contains error information from updating a batch of asset property values.
**/
export class BatchPutAssetPropertyError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode: BatchPutAssetPropertyValueErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=timestamps", elemType: TimeInNanos })
  timestamps: TimeInNanos[];
}
