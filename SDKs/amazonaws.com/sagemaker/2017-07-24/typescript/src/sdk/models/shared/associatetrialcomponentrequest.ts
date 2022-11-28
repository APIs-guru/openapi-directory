import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName: string;
}
