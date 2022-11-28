import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesEnrollmentTokensListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensListRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesEnrollmentTokensListPathParams;
    queryParams: AndroidmanagementEnterprisesEnrollmentTokensListQueryParams;
    security: AndroidmanagementEnterprisesEnrollmentTokensListSecurity;
}
export declare class AndroidmanagementEnterprisesEnrollmentTokensListResponse extends SpeakeasyBase {
    contentType: string;
    listEnrollmentTokensResponse?: shared.ListEnrollmentTokensResponse;
    statusCode: number;
}
