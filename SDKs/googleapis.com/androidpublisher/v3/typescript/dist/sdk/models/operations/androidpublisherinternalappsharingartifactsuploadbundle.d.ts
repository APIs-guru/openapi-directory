import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInternalappsharingartifactsUploadbundlePathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherInternalappsharingartifactsUploadbundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadbundleRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInternalappsharingartifactsUploadbundlePathParams;
    queryParams: AndroidpublisherInternalappsharingartifactsUploadbundleQueryParams;
    security: AndroidpublisherInternalappsharingartifactsUploadbundleSecurity;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadbundleResponse extends SpeakeasyBase {
    contentType: string;
    internalAppSharingArtifact?: shared.InternalAppSharingArtifact;
    statusCode: number;
}
