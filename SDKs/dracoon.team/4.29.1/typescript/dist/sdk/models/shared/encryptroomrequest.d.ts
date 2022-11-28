import { SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for handling encryption settings for a room
**/
export declare class EncryptRoomRequest extends SpeakeasyBase {
    dataRoomRescueKey?: UserKeyPairContainer;
    isEncrypted: boolean;
    useDataSpaceRescueKey?: boolean;
}
