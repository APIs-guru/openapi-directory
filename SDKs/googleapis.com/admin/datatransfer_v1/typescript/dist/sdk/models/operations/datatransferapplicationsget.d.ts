import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatatransferApplicationsGetPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DatatransferApplicationsGetQueryParams extends SpeakeasyBase {
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
export declare class DatatransferApplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferApplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferApplicationsGetSecurity extends SpeakeasyBase {
    option1?: DatatransferApplicationsGetSecurityOption1;
    option2?: DatatransferApplicationsGetSecurityOption2;
}
export declare class DatatransferApplicationsGetRequest extends SpeakeasyBase {
    pathParams: DatatransferApplicationsGetPathParams;
    queryParams: DatatransferApplicationsGetQueryParams;
    security: DatatransferApplicationsGetSecurity;
}
export declare class DatatransferApplicationsGetResponse extends SpeakeasyBase {
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
