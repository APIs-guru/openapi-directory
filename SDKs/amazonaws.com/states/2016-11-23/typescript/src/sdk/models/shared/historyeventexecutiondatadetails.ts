import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistoryEventExecutionDataDetails
/** 
 * Provides details about input or output in an execution history event.
**/
export class HistoryEventExecutionDataDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
