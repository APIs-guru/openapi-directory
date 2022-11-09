import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateActivationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationCode" })
  activationCode?: string;

  @Metadata({ data: "json, name=ActivationId" })
  activationId?: string;
}
