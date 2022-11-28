import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class Security extends SpeakeasyBase {
    auth: SchemeAuth;
}
