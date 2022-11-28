import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum {
    FilterSyntaxUnspecified = "FILTER_SYNTAX_UNSPECIFIED",
    Pql = "PQL",
    ListFilter = "LIST_FILTER"
}
export declare class Adexchangebuyer2AccountsProposalsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    filterSyntax?: Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsProposalsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsListPathParams;
    queryParams: Adexchangebuyer2AccountsProposalsListQueryParams;
    security: Adexchangebuyer2AccountsProposalsListSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsListResponse extends SpeakeasyBase {
    contentType: string;
    listProposalsResponse?: shared.ListProposalsResponse;
    statusCode: number;
}
