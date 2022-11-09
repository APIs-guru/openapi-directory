import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetCountriesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class LocaleGetCountriesRequest extends SpeakeasyBase {
    security: LocaleGetCountriesSecurity;
}
export declare class LocaleGetCountriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    countryList?: shared.CountryList;
}
