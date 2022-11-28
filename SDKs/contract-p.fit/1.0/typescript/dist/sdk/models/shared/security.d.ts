import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBasic extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SchemeToken extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    basic?: SchemeBasic;
    token?: SchemeToken;
}
