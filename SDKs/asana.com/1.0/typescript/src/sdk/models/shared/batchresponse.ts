import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchResponse
/** 
 * A response object returned from a batch request.
**/
export class BatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;
}
