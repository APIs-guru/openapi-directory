import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateTrialComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
