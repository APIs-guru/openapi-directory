import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactMethodVerificationProtocolEnum } from "./contactmethodverificationprotocolenum";



export class SendContactMethodVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: ContactMethodVerificationProtocolEnum;
}
