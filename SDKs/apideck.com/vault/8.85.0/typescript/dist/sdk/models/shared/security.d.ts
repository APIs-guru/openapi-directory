import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApplicationId extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey: SchemeApiKey;
    applicationId: SchemeApplicationId;
}
