import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsGetPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsGetPathParams;
    queryParams: AndroidpublisherEditsApklistingsGetQueryParams;
    security: AndroidpublisherEditsApklistingsGetSecurity;
}
export declare class AndroidpublisherEditsApklistingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
