import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTrialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
