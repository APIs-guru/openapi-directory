import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvokeAsyncResponse
/** 
 * A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. 
**/
export class InvokeAsyncResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: number;
}
