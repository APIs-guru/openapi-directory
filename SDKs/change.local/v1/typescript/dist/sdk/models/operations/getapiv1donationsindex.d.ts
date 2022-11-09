import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiV1DonationsIndexQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class GetApiV1DonationsIndexSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1DonationsIndexRequest extends SpeakeasyBase {
    queryParams: GetApiV1DonationsIndexQueryParams;
    security: GetApiV1DonationsIndexSecurity;
}
export declare class GetApiV1DonationsIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
