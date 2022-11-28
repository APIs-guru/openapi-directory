import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsFilteredBidsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse extends SpeakeasyBase {
    contentType: string;
    listFilteredBidsResponse?: shared.ListFilteredBidsResponse;
    statusCode: number;
}
