import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersListPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryMembersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeDerivedMembership?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    roles?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryMembersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersListSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersListSecurityOption1;
    option2?: DirectoryMembersListSecurityOption2;
    option3?: DirectoryMembersListSecurityOption3;
    option4?: DirectoryMembersListSecurityOption4;
}
export declare class DirectoryMembersListRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersListPathParams;
    queryParams: DirectoryMembersListQueryParams;
    security: DirectoryMembersListSecurity;
}
export declare class DirectoryMembersListResponse extends SpeakeasyBase {
    contentType: string;
    members?: shared.Members;
    statusCode: number;
}
