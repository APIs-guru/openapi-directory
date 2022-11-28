import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTrialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
