import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AbusiveexperiencereportViolatingSitesListQueryParams extends SpeakeasyBase {
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
export declare class AbusiveexperiencereportViolatingSitesListRequest extends SpeakeasyBase {
    queryParams: AbusiveexperiencereportViolatingSitesListQueryParams;
}
export declare class AbusiveexperiencereportViolatingSitesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    violatingSitesResponse?: shared.ViolatingSitesResponse;
}
