import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
