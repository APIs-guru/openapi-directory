import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTrialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=TrialName" })
  trialName: string;
}
