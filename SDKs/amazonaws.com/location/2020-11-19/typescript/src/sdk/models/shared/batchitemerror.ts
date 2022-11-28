import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemErrorCodeEnum } from "./batchitemerrorcodeenum";



// BatchItemError
/** 
 * Contains the batch request error details associated with the request.
**/
export class BatchItemError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: BatchItemErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
