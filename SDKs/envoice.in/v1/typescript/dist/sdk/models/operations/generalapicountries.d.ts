import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneralApiCountriesHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiCountriesRequest extends SpeakeasyBase {
    headers: GeneralApiCountriesHeaders;
}
export declare class GeneralApiCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    countryDetailsApiModels?: shared.CountryDetailsApiModel[];
    statusCode: number;
}
