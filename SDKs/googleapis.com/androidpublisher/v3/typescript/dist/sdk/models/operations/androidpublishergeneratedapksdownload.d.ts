import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherGeneratedapksDownloadPathParams extends SpeakeasyBase {
    downloadId: string;
    packageName: string;
    versionCode: number;
}
export declare class AndroidpublisherGeneratedapksDownloadQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherGeneratedapksDownloadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherGeneratedapksDownloadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherGeneratedapksDownloadPathParams;
    queryParams: AndroidpublisherGeneratedapksDownloadQueryParams;
    security: AndroidpublisherGeneratedapksDownloadSecurity;
}
export declare class AndroidpublisherGeneratedapksDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
