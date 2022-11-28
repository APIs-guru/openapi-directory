import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";



export class CreateContactMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactEndpoint" })
  contactEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: ContactProtocolEnum;
}
