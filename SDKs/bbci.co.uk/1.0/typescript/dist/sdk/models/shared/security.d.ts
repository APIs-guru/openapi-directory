import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeBasic extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey: SchemeApiKey;
}
