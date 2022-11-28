import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRoleAssignmentsInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryRoleAssignmentsInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryRoleAssignmentsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRoleAssignmentsInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryRoleAssignmentsInsertPathParams;
    queryParams: DirectoryRoleAssignmentsInsertQueryParams;
    request?: shared.RoleAssignment;
    security: DirectoryRoleAssignmentsInsertSecurity;
}
export declare class DirectoryRoleAssignmentsInsertResponse extends SpeakeasyBase {
    contentType: string;
    roleAssignment?: shared.RoleAssignment;
    statusCode: number;
}
