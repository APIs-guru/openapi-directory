import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiV1DonationsShowQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV1DonationsShowSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1DonationsShowRequest extends SpeakeasyBase {
    queryParams: GetApiV1DonationsShowQueryParams;
    security: GetApiV1DonationsShowSecurity;
}
export declare class GetApiV1DonationsShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
