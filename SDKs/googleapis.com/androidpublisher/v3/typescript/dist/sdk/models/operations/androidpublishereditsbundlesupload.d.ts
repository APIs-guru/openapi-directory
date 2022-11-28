import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsBundlesUploadPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsBundlesUploadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    ackBundleInstallationWarning?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    deviceTierConfigId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherEditsBundlesUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsBundlesUploadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsBundlesUploadPathParams;
    queryParams: AndroidpublisherEditsBundlesUploadQueryParams;
    security: AndroidpublisherEditsBundlesUploadSecurity;
}
export declare class AndroidpublisherEditsBundlesUploadResponse extends SpeakeasyBase {
    bundle?: shared.Bundle;
    contentType: string;
    statusCode: number;
}
