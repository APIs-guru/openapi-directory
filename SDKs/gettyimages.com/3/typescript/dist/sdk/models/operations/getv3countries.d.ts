import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3CountriesHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3CountriesRequest extends SpeakeasyBase {
    headers: GetV3CountriesHeaders;
}
export declare class GetV3CountriesResponse extends SpeakeasyBase {
    contentType: string;
    countriesList?: shared.CountriesList;
    statusCode: number;
}
