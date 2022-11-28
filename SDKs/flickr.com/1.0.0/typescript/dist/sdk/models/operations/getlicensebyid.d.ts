import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLicenseByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetLicenseById200ApplicationJsonLicensesLicense extends SpeakeasyBase {
    id?: number;
    name?: string;
    url?: string;
}
export declare class GetLicenseById200ApplicationJsonLicenses extends SpeakeasyBase {
    license?: GetLicenseById200ApplicationJsonLicensesLicense[];
}
export declare class GetLicenseById200ApplicationJson extends SpeakeasyBase {
    licenses?: GetLicenseById200ApplicationJsonLicenses;
    stat?: string;
}
export declare class GetLicenseByIdRequest extends SpeakeasyBase {
    queryParams: GetLicenseByIdQueryParams;
}
export declare class GetLicenseByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLicenseById200ApplicationJsonObject?: GetLicenseById200ApplicationJson;
}
