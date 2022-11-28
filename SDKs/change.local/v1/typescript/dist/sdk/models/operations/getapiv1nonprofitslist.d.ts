import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1NonprofitsListQueryParams extends SpeakeasyBase {
    name?: string;
    page?: number;
}
export declare class GetApiV1NonprofitsListSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1NonprofitsListRequest extends SpeakeasyBase {
    queryParams: GetApiV1NonprofitsListQueryParams;
    security: GetApiV1NonprofitsListSecurity;
}
export declare class GetApiV1NonprofitsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
