import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInitiatedCancellation } from "./userinitiatedcancellation";


// CanceledStateContext
/** 
 * Information specific to a subscription in canceled state.
**/
export class CanceledStateContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerInitiatedCancellation" })
  developerInitiatedCancellation?: Map<string, any>;

  @Metadata({ data: "json, name=replacementCancellation" })
  replacementCancellation?: Map<string, any>;

  @Metadata({ data: "json, name=systemInitiatedCancellation" })
  systemInitiatedCancellation?: Map<string, any>;

  @Metadata({ data: "json, name=userInitiatedCancellation" })
  userInitiatedCancellation?: UserInitiatedCancellation;
}
