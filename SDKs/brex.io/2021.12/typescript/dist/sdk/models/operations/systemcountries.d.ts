import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SystemCountriesSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class SystemCountriesRequest extends SpeakeasyBase {
    security: SystemCountriesSecurity;
}
export declare class SystemCountriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemCountries200ApplicationJsonAnies?: any[];
    systemCountriesDefaultApplicationJsonAny?: any;
}
