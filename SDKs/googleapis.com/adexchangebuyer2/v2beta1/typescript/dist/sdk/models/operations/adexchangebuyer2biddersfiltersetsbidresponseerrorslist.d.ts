import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse extends SpeakeasyBase {
    contentType: string;
    listBidResponseErrorsResponse?: shared.ListBidResponseErrorsResponse;
    statusCode: number;
}
