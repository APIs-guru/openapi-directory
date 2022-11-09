import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeHeaderApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeQueryApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    headerApiKey: SchemeHeaderApiKey;
}
