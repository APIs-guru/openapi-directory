import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsDetailsPatchPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDetailsPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsDetailsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsDetailsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsDetailsPatchPathParams;
    queryParams: AndroidpublisherEditsDetailsPatchQueryParams;
    request?: shared.AppDetails;
    security: AndroidpublisherEditsDetailsPatchSecurity;
}
export declare class AndroidpublisherEditsDetailsPatchResponse extends SpeakeasyBase {
    appDetails?: shared.AppDetails;
    contentType: string;
    statusCode: number;
}
