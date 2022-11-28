import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1ProvincesQueryParams extends SpeakeasyBase {
    year?: string;
}
export declare class GetApiV1Provinces200ApplicationJson extends SpeakeasyBase {
    provinces?: shared.Province[];
}
export declare class GetApiV1ProvincesRequest extends SpeakeasyBase {
    queryParams: GetApiV1ProvincesQueryParams;
}
export declare class GetApiV1ProvincesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV1Provinces200ApplicationJsonObject?: GetApiV1Provinces200ApplicationJson;
}
