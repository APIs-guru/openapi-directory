import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneralApiUiLanguagesHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiUiLanguagesRequest extends SpeakeasyBase {
    headers: GeneralApiUiLanguagesHeaders;
}
export declare class GeneralApiUiLanguagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    uiLanguageDetailsApiModels?: shared.UiLanguageDetailsApiModel[];
}
