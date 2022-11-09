import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTrialComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
