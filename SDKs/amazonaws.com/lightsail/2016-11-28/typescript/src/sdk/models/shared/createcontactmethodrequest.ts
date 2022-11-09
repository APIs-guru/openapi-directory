import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";


export class CreateContactMethodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactEndpoint" })
  contactEndpoint: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: ContactProtocolEnum;
}
