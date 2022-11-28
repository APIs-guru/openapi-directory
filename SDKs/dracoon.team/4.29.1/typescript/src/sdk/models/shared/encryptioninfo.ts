import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EncryptionInfoDataSpaceKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}

export enum EncryptionInfoRoomKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}

export enum EncryptionInfoUserKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}


// EncryptionInfo
/** 
 * Encryption states
**/
export class EncryptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSpaceKeyState" })
  dataSpaceKeyState: EncryptionInfoDataSpaceKeyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=roomKeyState" })
  roomKeyState: EncryptionInfoRoomKeyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userKeyState" })
  userKeyState: EncryptionInfoUserKeyStateEnum;
}
