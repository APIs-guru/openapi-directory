import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatatransferApplicationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatatransferApplicationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferApplicationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferApplicationsListSecurity extends SpeakeasyBase {
    option1?: DatatransferApplicationsListSecurityOption1;
    option2?: DatatransferApplicationsListSecurityOption2;
}
export declare class DatatransferApplicationsListRequest extends SpeakeasyBase {
    queryParams: DatatransferApplicationsListQueryParams;
    security: DatatransferApplicationsListSecurity;
}
export declare class DatatransferApplicationsListResponse extends SpeakeasyBase {
    applicationsListResponse?: shared.ApplicationsListResponse;
    contentType: string;
    statusCode: number;
}
