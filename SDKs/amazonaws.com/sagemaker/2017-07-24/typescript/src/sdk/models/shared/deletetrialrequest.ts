import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTrialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName: string;
}
