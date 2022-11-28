import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserCipherUseEntityInterfaceEnum {
    Web = "web",
    Ftp = "ftp",
    Sftp = "sftp",
    Dav = "dav",
    Desktop = "desktop",
    Restapi = "restapi",
    Robot = "robot",
    Jsapi = "jsapi"
}


// UserCipherUseEntity
/** 
 * List User Cipher Uses
**/
export class UserCipherUseEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: UserCipherUseEntityInterfaceEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol_cipher" })
  protocolCipher?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
