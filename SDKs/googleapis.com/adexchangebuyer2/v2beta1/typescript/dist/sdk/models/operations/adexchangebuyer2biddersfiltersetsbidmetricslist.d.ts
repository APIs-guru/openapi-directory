import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsBidMetricsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsBidMetricsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    listBidMetricsResponse?: shared.ListBidMetricsResponse;
    statusCode: number;
}
