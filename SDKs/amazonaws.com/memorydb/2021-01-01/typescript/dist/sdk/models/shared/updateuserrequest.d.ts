import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";
export declare class UpdateUserRequest extends SpeakeasyBase {
    accessString?: string;
    authenticationMode?: AuthenticationMode;
    userName: string;
}
