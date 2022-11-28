import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsUpdatePathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsUpdatePathParams;
    queryParams: AndroidpublisherEditsApklistingsUpdateQueryParams;
    request?: shared.ApkListing;
    security: AndroidpublisherEditsApklistingsUpdateSecurity;
}
export declare class AndroidpublisherEditsApklistingsUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
