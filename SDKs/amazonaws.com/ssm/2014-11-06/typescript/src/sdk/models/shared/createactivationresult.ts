import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateActivationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationCode" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ActivationId" })
  activationId?: string;
}
