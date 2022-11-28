import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteActivationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationId" })
  activationId: string;
}
