import { SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailEntryResult } from "./bulkemailentryresult";
/**
 * The following data is returned in JSON format by the service.
**/
export declare class SendBulkEmailResponse extends SpeakeasyBase {
    bulkEmailEntryResults: BulkEmailEntryResult[];
}
