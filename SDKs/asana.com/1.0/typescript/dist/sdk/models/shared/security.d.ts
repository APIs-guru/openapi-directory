import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemePersonalAccessToken extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeOauth2 extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    personalAccessToken?: SchemePersonalAccessToken;
    oauth2?: SchemeOauth2;
}
