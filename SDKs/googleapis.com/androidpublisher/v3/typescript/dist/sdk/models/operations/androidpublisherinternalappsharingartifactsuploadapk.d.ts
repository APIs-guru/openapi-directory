import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInternalappsharingartifactsUploadapkPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadapkQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherInternalappsharingartifactsUploadapkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadapkRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInternalappsharingartifactsUploadapkPathParams;
    queryParams: AndroidpublisherInternalappsharingartifactsUploadapkQueryParams;
    security: AndroidpublisherInternalappsharingartifactsUploadapkSecurity;
}
export declare class AndroidpublisherInternalappsharingartifactsUploadapkResponse extends SpeakeasyBase {
    contentType: string;
    internalAppSharingArtifact?: shared.InternalAppSharingArtifact;
    statusCode: number;
}
