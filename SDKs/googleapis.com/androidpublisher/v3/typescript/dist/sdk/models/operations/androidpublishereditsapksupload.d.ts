import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApksUploadPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApksUploadQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsApksUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApksUploadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApksUploadPathParams;
    queryParams: AndroidpublisherEditsApksUploadQueryParams;
    security: AndroidpublisherEditsApksUploadSecurity;
}
export declare class AndroidpublisherEditsApksUploadResponse extends SpeakeasyBase {
    apk?: shared.Apk;
    contentType: string;
    statusCode: number;
}
