import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsBundlesListPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsBundlesListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsBundlesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsBundlesListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsBundlesListPathParams;
    queryParams: AndroidpublisherEditsBundlesListQueryParams;
    security: AndroidpublisherEditsBundlesListSecurity;
}
export declare class AndroidpublisherEditsBundlesListResponse extends SpeakeasyBase {
    bundlesListResponse?: shared.BundlesListResponse;
    contentType: string;
    statusCode: number;
}
