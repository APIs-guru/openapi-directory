import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentSource } from "./trialcomponentsource";



// TrialComponentSimpleSummary
/** 
 * A short summary of a trial component.
**/
export class TrialComponentSimpleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentSource" })
  trialComponentSource?: TrialComponentSource;
}
