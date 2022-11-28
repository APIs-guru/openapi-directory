import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexperiencereportViolatingSitesListQueryParams extends SpeakeasyBase {
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
export declare class AdexperiencereportViolatingSitesListRequest extends SpeakeasyBase {
    queryParams: AdexperiencereportViolatingSitesListQueryParams;
}
export declare class AdexperiencereportViolatingSitesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    violatingSitesResponse?: shared.ViolatingSitesResponse;
}
