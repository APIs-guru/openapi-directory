import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PausedStateContext
/** 
 * Information specific to a subscription in paused state.
**/
export class PausedStateContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoResumeTime" })
  autoResumeTime?: string;
}
