import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReconnectEnumEnum } from "./reconnectenumenum";



// ClientProperties
/** 
 * Describes an Amazon WorkSpaces client.
**/
export class ClientProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReconnectEnabled" })
  reconnectEnabled?: ReconnectEnumEnum;
}
