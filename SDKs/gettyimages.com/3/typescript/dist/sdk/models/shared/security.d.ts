import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeOAuth2 extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey?: SchemeApiKey;
    oAuth2?: SchemeOAuth2;
}
