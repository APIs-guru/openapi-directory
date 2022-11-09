import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTrialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;
}
