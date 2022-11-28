import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBearer extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    bearer: SchemeBearer;
}
