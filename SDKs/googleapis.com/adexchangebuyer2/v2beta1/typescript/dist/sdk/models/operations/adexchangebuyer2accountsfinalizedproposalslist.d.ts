import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsFinalizedProposalsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum {
    FilterSyntaxUnspecified = "FILTER_SYNTAX_UNSPECIFIED",
    Pql = "PQL",
    ListFilter = "LIST_FILTER"
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    filterSyntax?: Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsFinalizedProposalsListPathParams;
    queryParams: Adexchangebuyer2AccountsFinalizedProposalsListQueryParams;
    security: Adexchangebuyer2AccountsFinalizedProposalsListSecurity;
}
export declare class Adexchangebuyer2AccountsFinalizedProposalsListResponse extends SpeakeasyBase {
    contentType: string;
    listProposalsResponse?: shared.ListProposalsResponse;
    statusCode: number;
}
