import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTrialComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
