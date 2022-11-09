import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetLanguagesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class LocaleGetLanguagesRequest extends SpeakeasyBase {
    security: LocaleGetLanguagesSecurity;
}
export declare class LocaleGetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    languageList?: shared.LanguageList;
}
