import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";


export class DeleteContactMethodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=protocol" })
  protocol: ContactProtocolEnum;
}
