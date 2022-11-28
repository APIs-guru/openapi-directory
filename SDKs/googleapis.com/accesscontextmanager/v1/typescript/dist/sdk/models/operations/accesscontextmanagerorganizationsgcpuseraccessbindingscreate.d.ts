import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams;
    queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateQueryParams;
    request?: shared.GcpUserAccessBinding;
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
