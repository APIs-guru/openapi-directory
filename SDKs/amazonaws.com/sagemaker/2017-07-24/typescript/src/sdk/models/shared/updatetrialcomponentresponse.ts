import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrialComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
