import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthenticationErrorStatusEnum {
    Error = "error"
}
export declare class AuthenticationError extends SpeakeasyBase {
    error: string;
    status?: AuthenticationErrorStatusEnum;
}
