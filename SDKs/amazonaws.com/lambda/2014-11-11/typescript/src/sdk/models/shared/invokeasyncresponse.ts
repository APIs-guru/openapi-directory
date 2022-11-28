import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvokeAsyncResponse
/** 
 * Upon success, it returns empty response. Otherwise, throws an exception.
**/
export class InvokeAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;
}
