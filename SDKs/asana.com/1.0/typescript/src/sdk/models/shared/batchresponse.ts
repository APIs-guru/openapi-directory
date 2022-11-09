import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchResponse
/** 
 * A response object returned from a batch request.
**/
export class BatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=status_code" })
  statusCode?: number;
}
