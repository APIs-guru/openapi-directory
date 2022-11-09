import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactProtocolEnum } from "./contactprotocolenum";


export class GetContactMethodsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=protocols" })
  protocols?: ContactProtocolEnum[];
}
