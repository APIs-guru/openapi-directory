import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;
}
