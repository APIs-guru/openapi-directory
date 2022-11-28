import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsDeletePathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsDeletePathParams;
    queryParams: AndroidpublisherEditsApklistingsDeleteQueryParams;
    security: AndroidpublisherEditsApklistingsDeleteSecurity;
}
export declare class AndroidpublisherEditsApklistingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
