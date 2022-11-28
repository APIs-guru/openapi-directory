import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse extends SpeakeasyBase {
    contentType: string;
    listFilteredBidRequestsResponse?: shared.ListFilteredBidRequestsResponse;
    statusCode: number;
}
