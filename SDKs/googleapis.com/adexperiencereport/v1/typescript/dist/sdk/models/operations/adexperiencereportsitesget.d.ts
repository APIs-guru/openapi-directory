import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexperiencereportSitesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdexperiencereportSitesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdexperiencereportSitesGetRequest extends SpeakeasyBase {
    pathParams: AdexperiencereportSitesGetPathParams;
    queryParams: AdexperiencereportSitesGetQueryParams;
}
export declare class AdexperiencereportSitesGetResponse extends SpeakeasyBase {
    contentType: string;
    siteSummaryResponse?: shared.SiteSummaryResponse;
    statusCode: number;
}
