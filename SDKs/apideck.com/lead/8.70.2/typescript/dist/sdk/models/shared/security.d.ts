import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApplicationId extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeConsumerId extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey: SchemeApiKey;
    applicationId: SchemeApplicationId;
    consumerId: SchemeConsumerId;
}
