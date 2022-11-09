import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrialComponentPrimaryStatusEnum } from "./trialcomponentprimarystatusenum";


// TrialComponentStatus
/** 
 * The status of the trial component.
**/
export class TrialComponentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PrimaryStatus" })
  primaryStatus?: TrialComponentPrimaryStatusEnum;
}
