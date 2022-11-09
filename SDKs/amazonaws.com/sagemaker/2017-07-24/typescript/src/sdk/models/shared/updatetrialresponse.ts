import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
