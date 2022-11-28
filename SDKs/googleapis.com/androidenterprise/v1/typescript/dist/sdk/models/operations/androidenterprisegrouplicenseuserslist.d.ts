import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseGrouplicenseusersListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    groupLicenseId: string;
}
export declare class AndroidenterpriseGrouplicenseusersListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseGrouplicenseusersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseGrouplicenseusersListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseGrouplicenseusersListPathParams;
    queryParams: AndroidenterpriseGrouplicenseusersListQueryParams;
    security: AndroidenterpriseGrouplicenseusersListSecurity;
}
export declare class AndroidenterpriseGrouplicenseusersListResponse extends SpeakeasyBase {
    contentType: string;
    groupLicenseUsersListResponse?: shared.GroupLicenseUsersListResponse;
    statusCode: number;
}
