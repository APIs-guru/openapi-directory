import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";


// EncryptRoomRequest
/** 
 * Request model for handling encryption settings for a room
**/
export class EncryptRoomRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRoomRescueKey" })
  dataRoomRescueKey?: UserKeyPairContainer;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted: boolean;

  @Metadata({ data: "json, name=useDataSpaceRescueKey" })
  useDataSpaceRescueKey?: boolean;
}
