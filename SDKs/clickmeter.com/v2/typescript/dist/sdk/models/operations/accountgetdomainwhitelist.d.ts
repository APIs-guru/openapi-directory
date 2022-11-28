import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetDomainWhitelistQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AccountGetDomainWhitelistRequest extends SpeakeasyBase {
    queryParams: AccountGetDomainWhitelistQueryParams;
}
export declare class AccountGetDomainWhitelistResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry;
    contentType: string;
    statusCode: number;
}
