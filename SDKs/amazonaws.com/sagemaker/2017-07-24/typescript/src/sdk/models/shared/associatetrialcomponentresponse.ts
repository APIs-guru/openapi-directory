import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
