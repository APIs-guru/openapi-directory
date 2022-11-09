import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPutAssetPropertyValueErrorCodeEnum } from "./batchputassetpropertyvalueerrorcodeenum";
import { TimeInNanos } from "./timeinnanos";


// BatchPutAssetPropertyError
/** 
 * Contains error information from updating a batch of asset property values.
**/
export class BatchPutAssetPropertyError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode: BatchPutAssetPropertyValueErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage: string;

  @Metadata({ data: "json, name=timestamps", elemType: shared.TimeInNanos })
  timestamps: TimeInNanos[];
}
