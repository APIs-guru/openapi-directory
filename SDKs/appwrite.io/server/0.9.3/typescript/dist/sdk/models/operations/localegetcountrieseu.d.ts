import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetCountriesEuSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class LocaleGetCountriesEuRequest extends SpeakeasyBase {
    security: LocaleGetCountriesEuSecurity;
}
export declare class LocaleGetCountriesEuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    countryList?: shared.CountryList;
}
