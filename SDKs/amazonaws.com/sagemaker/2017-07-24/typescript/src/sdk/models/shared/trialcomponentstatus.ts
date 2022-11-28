import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentPrimaryStatusEnum } from "./trialcomponentprimarystatusenum";



// TrialComponentStatus
/** 
 * The status of the trial component.
**/
export class TrialComponentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryStatus" })
  primaryStatus?: TrialComponentPrimaryStatusEnum;
}
