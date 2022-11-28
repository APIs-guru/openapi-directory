import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsLosingBidsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse extends SpeakeasyBase {
    contentType: string;
    listLosingBidsResponse?: shared.ListLosingBidsResponse;
    statusCode: number;
}
