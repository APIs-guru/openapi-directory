import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactMethodVerificationProtocolEnum } from "./contactmethodverificationprotocolenum";


export class SendContactMethodVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=protocol" })
  protocol: ContactMethodVerificationProtocolEnum;
}
