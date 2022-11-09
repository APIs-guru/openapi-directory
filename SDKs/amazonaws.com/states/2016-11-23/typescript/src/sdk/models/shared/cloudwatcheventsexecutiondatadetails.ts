import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchEventsExecutionDataDetails
/** 
 * Provides details about execution input or output.
**/
export class CloudWatchEventsExecutionDataDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=included" })
  included?: boolean;
}
