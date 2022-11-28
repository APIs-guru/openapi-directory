import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parent
/** 
 * The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials.
**/
export class Parent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
