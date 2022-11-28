import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRoleAssignmentsListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryRoleAssignmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    roleId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userKey?: string;
}
export declare class DirectoryRoleAssignmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRoleAssignmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRoleAssignmentsListSecurity extends SpeakeasyBase {
    option1?: DirectoryRoleAssignmentsListSecurityOption1;
    option2?: DirectoryRoleAssignmentsListSecurityOption2;
}
export declare class DirectoryRoleAssignmentsListRequest extends SpeakeasyBase {
    pathParams: DirectoryRoleAssignmentsListPathParams;
    queryParams: DirectoryRoleAssignmentsListQueryParams;
    security: DirectoryRoleAssignmentsListSecurity;
}
export declare class DirectoryRoleAssignmentsListResponse extends SpeakeasyBase {
    contentType: string;
    roleAssignments?: shared.RoleAssignments;
    statusCode: number;
}
