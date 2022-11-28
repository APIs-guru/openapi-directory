import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams extends SpeakeasyBase {
    creativeStatusId: number;
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    listCreativeStatusBreakdownByCreativeResponse?: shared.ListCreativeStatusBreakdownByCreativeResponse;
    statusCode: number;
}
