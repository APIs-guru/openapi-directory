import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteActivationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationId" })
  activationId: string;
}
