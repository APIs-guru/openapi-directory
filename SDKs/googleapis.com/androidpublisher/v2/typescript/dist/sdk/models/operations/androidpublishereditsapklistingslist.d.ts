import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApklistingsListPathParams extends SpeakeasyBase {
    apkVersionCode: number;
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApklistingsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherEditsApklistingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApklistingsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApklistingsListPathParams;
    queryParams: AndroidpublisherEditsApklistingsListQueryParams;
    security: AndroidpublisherEditsApklistingsListSecurity;
}
export declare class AndroidpublisherEditsApklistingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
