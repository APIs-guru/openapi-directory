import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherSystemapksVariantsDownloadPathParams extends SpeakeasyBase {
    packageName: string;
    variantId: number;
    versionCode: string;
}
export declare class AndroidpublisherSystemapksVariantsDownloadQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherSystemapksVariantsDownloadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherSystemapksVariantsDownloadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherSystemapksVariantsDownloadPathParams;
    queryParams: AndroidpublisherSystemapksVariantsDownloadQueryParams;
    security: AndroidpublisherSystemapksVariantsDownloadSecurity;
}
export declare class AndroidpublisherSystemapksVariantsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
