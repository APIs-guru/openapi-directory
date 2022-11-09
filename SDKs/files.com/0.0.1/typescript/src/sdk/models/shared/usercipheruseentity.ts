import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserCipherUseEntityInterfaceEnum {
    Web = "web"
,    Ftp = "ftp"
,    Sftp = "sftp"
,    Dav = "dav"
,    Desktop = "desktop"
,    Restapi = "restapi"
,    Robot = "robot"
,    Jsapi = "jsapi"
}


// UserCipherUseEntity
/** 
 * List User Cipher Uses
**/
export class UserCipherUseEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: UserCipherUseEntityInterfaceEnum;

  @Metadata({ data: "json, name=protocol_cipher" })
  protocolCipher?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
