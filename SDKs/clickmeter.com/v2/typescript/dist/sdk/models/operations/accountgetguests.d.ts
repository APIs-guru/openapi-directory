import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AccountGetGuestsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class AccountGetGuestsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortDirection?: AccountGetGuestsSortDirectionEnum;
    textSearch?: string;
}
export declare class AccountGetGuestsRequest extends SpeakeasyBase {
    queryParams: AccountGetGuestsQueryParams;
}
export declare class AccountGetGuestsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
