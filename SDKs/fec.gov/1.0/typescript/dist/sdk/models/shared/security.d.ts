import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKeyHeaderAuth extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiKeyQueryAuth extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKeyHeaderAuth: SchemeApiKeyHeaderAuth;
    apiKeyQueryAuth: SchemeApiKeyQueryAuth;
    apiKey: SchemeApiKey;
}
