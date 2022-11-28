import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";



export class GetContactMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: ContactProtocolEnum[];
}
