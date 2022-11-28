import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams;
    queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams;
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listGcpUserAccessBindingsResponse?: shared.ListGcpUserAccessBindingsResponse;
    statusCode: number;
}
