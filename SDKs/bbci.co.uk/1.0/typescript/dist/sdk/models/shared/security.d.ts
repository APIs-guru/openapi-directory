import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey: SchemeApiKey;
}
export declare class SchemeBasic extends SpeakeasyBase {
    password: string;
    username: string;
}
