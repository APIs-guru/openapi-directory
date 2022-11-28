import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";



export class DeleteContactMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: ContactProtocolEnum;
}
