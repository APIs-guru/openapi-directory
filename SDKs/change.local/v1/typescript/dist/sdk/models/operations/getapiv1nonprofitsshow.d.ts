import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiV1NonprofitsShowQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV1NonprofitsShowSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1NonprofitsShowRequest extends SpeakeasyBase {
    queryParams: GetApiV1NonprofitsShowQueryParams;
    security: GetApiV1NonprofitsShowSecurity;
}
export declare class GetApiV1NonprofitsShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
