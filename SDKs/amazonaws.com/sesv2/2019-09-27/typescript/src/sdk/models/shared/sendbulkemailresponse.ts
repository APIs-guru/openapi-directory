import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BulkEmailEntryResult } from "./bulkemailentryresult";


// SendBulkEmailResponse
/** 
 * The following data is returned in JSON format by the service.
**/
export class SendBulkEmailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BulkEmailEntryResults", elemType: shared.BulkEmailEntryResult })
  bulkEmailEntryResults: BulkEmailEntryResult[];
}
