import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    queryParams: GetAccountsQueryParams;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    accounts?: shared.Account[];
    contentType: string;
    statusCode: number;
}
