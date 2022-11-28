import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTrialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
