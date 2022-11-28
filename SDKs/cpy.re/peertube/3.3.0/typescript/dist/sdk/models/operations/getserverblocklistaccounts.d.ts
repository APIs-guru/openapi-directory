import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerBlocklistAccountsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetServerBlocklistAccountsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetServerBlocklistAccountsRequest extends SpeakeasyBase {
    queryParams: GetServerBlocklistAccountsQueryParams;
    security: GetServerBlocklistAccountsSecurity;
}
export declare class GetServerBlocklistAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
