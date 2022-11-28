import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}
