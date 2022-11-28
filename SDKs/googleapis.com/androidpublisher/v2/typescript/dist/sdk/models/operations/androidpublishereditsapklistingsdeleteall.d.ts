import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsDeleteallPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsDeleteallQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsDeleteallSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsDeleteallRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsDeleteallPathParams;
    queryParams: AndroidpublisherEditsApklistingsDeleteallQueryParams;
    security: AndroidpublisherEditsApklistingsDeleteallSecurity;
}
export declare class AndroidpublisherEditsApklistingsDeleteallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
