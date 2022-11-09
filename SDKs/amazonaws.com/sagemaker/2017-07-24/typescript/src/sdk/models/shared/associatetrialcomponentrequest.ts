import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateTrialComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;

  @Metadata({ data: "json, name=TrialName" })
  trialName: string;
}
