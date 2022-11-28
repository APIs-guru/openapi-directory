import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistoryEventExecutionDataDetails
/** 
 * Provides details about input or output in an execution history event.
**/
export class HistoryEventExecutionDataDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
