import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTrialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialName" })
  trialName: string;
}
