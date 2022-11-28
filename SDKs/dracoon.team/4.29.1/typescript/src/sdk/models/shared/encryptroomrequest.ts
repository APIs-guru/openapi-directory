import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";



// EncryptRoomRequest
/** 
 * Request model for handling encryption settings for a room
**/
export class EncryptRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRoomRescueKey" })
  dataRoomRescueKey?: UserKeyPairContainer;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted: boolean;

  @SpeakeasyMetadata({ data: "json, name=useDataSpaceRescueKey" })
  useDataSpaceRescueKey?: boolean;
}
