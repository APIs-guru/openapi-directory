import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchEventsExecutionDataDetails
/** 
 * Provides details about execution input or output.
**/
export class CloudWatchEventsExecutionDataDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: boolean;
}
