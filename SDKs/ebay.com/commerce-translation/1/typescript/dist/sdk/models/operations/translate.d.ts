import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class Translate400ApplicationJson extends SpeakeasyBase {
    errors?: shared.Error[];
}
export declare class Translate500ApplicationJson extends SpeakeasyBase {
    errors?: shared.Error[];
}
export declare class TranslateRequest extends SpeakeasyBase {
    request: shared.TranslateRequest;
    security: TranslateSecurity;
}
export declare class TranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translateResponse?: shared.TranslateResponse;
    translate400ApplicationJsonObject?: Translate400ApplicationJson;
    translate500ApplicationJsonObject?: Translate500ApplicationJson;
}
