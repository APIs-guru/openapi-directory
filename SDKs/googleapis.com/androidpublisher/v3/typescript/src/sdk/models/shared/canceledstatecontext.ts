import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInitiatedCancellation } from "./userinitiatedcancellation";



// CanceledStateContext
/** 
 * Information specific to a subscription in canceled state.
**/
export class CanceledStateContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerInitiatedCancellation" })
  developerInitiatedCancellation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=replacementCancellation" })
  replacementCancellation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=systemInitiatedCancellation" })
  systemInitiatedCancellation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userInitiatedCancellation" })
  userInitiatedCancellation?: UserInitiatedCancellation;
}
