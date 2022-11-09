import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { TrialComponentSource } from "./trialcomponentsource";


// TrialComponentSimpleSummary
/** 
 * A short summary of a trial component.
**/
export class TrialComponentSimpleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;

  @Metadata({ data: "json, name=TrialComponentSource" })
  trialComponentSource?: TrialComponentSource;
}
