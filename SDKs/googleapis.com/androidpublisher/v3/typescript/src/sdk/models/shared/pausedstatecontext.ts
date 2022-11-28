import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PausedStateContext
/** 
 * Information specific to a subscription in paused state.
**/
export class PausedStateContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoResumeTime" })
  autoResumeTime?: string;
}
