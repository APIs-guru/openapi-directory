import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams extends SpeakeasyBase {
    creativeStatusId: number;
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse extends SpeakeasyBase {
    contentType: string;
    listCreativeStatusBreakdownByDetailResponse?: shared.ListCreativeStatusBreakdownByDetailResponse;
    statusCode: number;
}
