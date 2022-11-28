import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams;
    queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams;
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
