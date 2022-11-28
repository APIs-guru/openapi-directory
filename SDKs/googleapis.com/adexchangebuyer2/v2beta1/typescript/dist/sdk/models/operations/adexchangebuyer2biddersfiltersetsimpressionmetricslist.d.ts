import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsImpressionMetricsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsImpressionMetricsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    listImpressionMetricsResponse?: shared.ListImpressionMetricsResponse;
    statusCode: number;
}
