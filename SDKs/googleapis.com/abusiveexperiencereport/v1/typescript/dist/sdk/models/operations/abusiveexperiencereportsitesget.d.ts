import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AbusiveexperiencereportSitesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AbusiveexperiencereportSitesGetQueryParams extends SpeakeasyBase {
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
export declare class AbusiveexperiencereportSitesGetRequest extends SpeakeasyBase {
    pathParams: AbusiveexperiencereportSitesGetPathParams;
    queryParams: AbusiveexperiencereportSitesGetQueryParams;
}
export declare class AbusiveexperiencereportSitesGetResponse extends SpeakeasyBase {
    contentType: string;
    siteSummaryResponse?: shared.SiteSummaryResponse;
    statusCode: number;
}
