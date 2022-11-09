import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReconnectEnumEnum } from "./reconnectenumenum";


// ClientProperties
/** 
 * Describes an Amazon WorkSpaces client.
**/
export class ClientProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReconnectEnabled" })
  reconnectEnabled?: ReconnectEnumEnum;
}
