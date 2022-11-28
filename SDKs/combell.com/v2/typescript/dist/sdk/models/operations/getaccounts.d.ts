import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsQueryParams extends SpeakeasyBase {
    assetType?: shared.AssetTypeEnum;
    identifier?: string;
    skip?: number;
    take?: number;
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    queryParams: GetAccountsQueryParams;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    accounts?: shared.Account[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
