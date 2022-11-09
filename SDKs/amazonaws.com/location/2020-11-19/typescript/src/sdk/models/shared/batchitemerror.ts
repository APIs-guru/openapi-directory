import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemErrorCodeEnum } from "./batchitemerrorcodeenum";


// BatchItemError
/** 
 * Contains the batch request error details associated with the request.
**/
export class BatchItemError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: BatchItemErrorCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
