import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsDetailsUpdatePathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDetailsUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsDetailsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsDetailsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsDetailsUpdatePathParams;
    queryParams: AndroidpublisherEditsDetailsUpdateQueryParams;
    request?: shared.AppDetails;
    security: AndroidpublisherEditsDetailsUpdateSecurity;
}
export declare class AndroidpublisherEditsDetailsUpdateResponse extends SpeakeasyBase {
    appDetails?: shared.AppDetails;
    contentType: string;
    statusCode: number;
}
