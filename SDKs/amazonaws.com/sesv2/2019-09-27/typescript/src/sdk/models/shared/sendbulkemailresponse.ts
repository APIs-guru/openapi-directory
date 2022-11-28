import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailEntryResult } from "./bulkemailentryresult";



// SendBulkEmailResponse
/** 
 * The following data is returned in JSON format by the service.
**/
export class SendBulkEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BulkEmailEntryResults", elemType: BulkEmailEntryResult })
  bulkEmailEntryResults: BulkEmailEntryResult[];
}
