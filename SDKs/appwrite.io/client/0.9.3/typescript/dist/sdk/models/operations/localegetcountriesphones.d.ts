import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetCountriesPhonesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class LocaleGetCountriesPhonesRequest extends SpeakeasyBase {
    security: LocaleGetCountriesPhonesSecurity;
}
export declare class LocaleGetCountriesPhonesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    phoneList?: shared.PhoneList;
}
