import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EncryptionInfoDataSpaceKeyStateEnum {
    None = "none"
,    Available = "available"
,    Pending = "pending"
}

export enum EncryptionInfoRoomKeyStateEnum {
    None = "none"
,    Available = "available"
,    Pending = "pending"
}

export enum EncryptionInfoUserKeyStateEnum {
    None = "none"
,    Available = "available"
,    Pending = "pending"
}


// EncryptionInfo
/** 
 * Encryption states
**/
export class EncryptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSpaceKeyState" })
  dataSpaceKeyState: EncryptionInfoDataSpaceKeyStateEnum;

  @Metadata({ data: "json, name=roomKeyState" })
  roomKeyState: EncryptionInfoRoomKeyStateEnum;

  @Metadata({ data: "json, name=userKeyState" })
  userKeyState: EncryptionInfoUserKeyStateEnum;
}
