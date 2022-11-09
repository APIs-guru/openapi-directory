import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTrialComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}
