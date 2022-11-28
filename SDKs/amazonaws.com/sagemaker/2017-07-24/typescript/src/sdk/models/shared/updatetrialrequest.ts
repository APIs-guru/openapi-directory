import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTrialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName: string;
}
