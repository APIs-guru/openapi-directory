import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeOauth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    oauth: SchemeOauth;
}
