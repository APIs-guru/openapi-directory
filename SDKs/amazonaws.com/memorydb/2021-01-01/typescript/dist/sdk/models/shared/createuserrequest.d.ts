import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationMode } from "./authenticationmode";
import { Tag } from "./tag";
export declare class CreateUserRequest extends SpeakeasyBase {
    accessString: string;
    authenticationMode: AuthenticationMode;
    tags?: Tag[];
    userName: string;
}
