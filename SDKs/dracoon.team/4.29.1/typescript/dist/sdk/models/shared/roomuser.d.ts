import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
import { PublicKeyContainerOutput } from "./publickeycontainer";
import { UserInfo } from "./userinfo";
/**
 * User information
**/
export declare class RoomUserOutput extends SpeakeasyBase {
    displayName: string;
    email: string;
    id: number;
    isGranted: boolean;
    login: string;
    permissions?: NodePermissions;
    publicKeyContainer?: PublicKeyContainerOutput;
    userInfo: UserInfo;
}
