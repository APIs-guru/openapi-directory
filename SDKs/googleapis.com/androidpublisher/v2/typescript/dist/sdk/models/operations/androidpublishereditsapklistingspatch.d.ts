import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsPatchPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsPatchPathParams;
    queryParams: AndroidpublisherEditsApklistingsPatchQueryParams;
    request?: shared.ApkListing;
    security: AndroidpublisherEditsApklistingsPatchSecurity;
}
export declare class AndroidpublisherEditsApklistingsPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
