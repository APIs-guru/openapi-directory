import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvokeAsyncResponse
/** 
 * Upon success, it returns empty response. Otherwise, throws an exception.
**/
export class InvokeAsyncResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: number;
}
