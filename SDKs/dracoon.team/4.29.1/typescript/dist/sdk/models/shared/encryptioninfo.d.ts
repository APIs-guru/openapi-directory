import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EncryptionInfoDataSpaceKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
export declare enum EncryptionInfoRoomKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
export declare enum EncryptionInfoUserKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
/**
 * Encryption states
**/
export declare class EncryptionInfo extends SpeakeasyBase {
    dataSpaceKeyState: EncryptionInfoDataSpaceKeyStateEnum;
    roomKeyState: EncryptionInfoRoomKeyStateEnum;
    userKeyState: EncryptionInfoUserKeyStateEnum;
}
