import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserCipherUseEntityInterfaceEnum {
    Web = "web",
    Ftp = "ftp",
    Sftp = "sftp",
    Dav = "dav",
    Desktop = "desktop",
    Restapi = "restapi",
    Robot = "robot",
    Jsapi = "jsapi"
}
/**
 * List User Cipher Uses
**/
export declare class UserCipherUseEntity extends SpeakeasyBase {
    createdAt?: Date;
    id?: number;
    interface?: UserCipherUseEntityInterfaceEnum;
    protocolCipher?: string;
    updatedAt?: Date;
    userId?: number;
}
