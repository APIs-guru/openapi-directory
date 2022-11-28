import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetIpBlacklistQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AccountGetIpBlacklistRequest extends SpeakeasyBase {
    queryParams: AccountGetIpBlacklistQueryParams;
}
export declare class AccountGetIpBlacklistResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry;
    contentType: string;
    statusCode: number;
}
