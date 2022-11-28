import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
