import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTrialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
