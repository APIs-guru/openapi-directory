import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1ProvincesProvinceIdProvinceIdEnum {
    Ab = "AB",
    Bc = "BC",
    Mb = "MB",
    Nb = "NB",
    Nl = "NL",
    Ns = "NS",
    Nt = "NT",
    Nu = "NU",
    On = "ON",
    Pe = "PE",
    Qc = "QC",
    Sk = "SK",
    Yt = "YT"
}
export declare class GetApiV1ProvincesProvinceIdPathParams extends SpeakeasyBase {
    provinceId: GetApiV1ProvincesProvinceIdProvinceIdEnum;
}
export declare class GetApiV1ProvincesProvinceIdQueryParams extends SpeakeasyBase {
    year?: string;
}
export declare class GetApiV1ProvincesProvinceId200ApplicationJson extends SpeakeasyBase {
    province?: shared.Province;
}
export declare class GetApiV1ProvincesProvinceId404ApplicationJson extends SpeakeasyBase {
    error?: shared.Error;
}
export declare class GetApiV1ProvincesProvinceIdRequest extends SpeakeasyBase {
    pathParams: GetApiV1ProvincesProvinceIdPathParams;
    queryParams: GetApiV1ProvincesProvinceIdQueryParams;
}
export declare class GetApiV1ProvincesProvinceIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV1ProvincesProvinceId200ApplicationJsonObject?: GetApiV1ProvincesProvinceId200ApplicationJson;
    getApiV1ProvincesProvinceId404ApplicationJsonObject?: GetApiV1ProvincesProvinceId404ApplicationJson;
}
