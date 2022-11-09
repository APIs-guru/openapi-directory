import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class LocaleGetRequest extends SpeakeasyBase {
    security: LocaleGetSecurity;
}
export declare class LocaleGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    locale?: shared.Locale;
}
