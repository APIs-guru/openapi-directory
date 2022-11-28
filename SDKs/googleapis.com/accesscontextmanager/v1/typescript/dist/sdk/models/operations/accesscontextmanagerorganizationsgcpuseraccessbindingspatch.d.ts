import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchPathParams;
    queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchQueryParams;
    request?: shared.GcpUserAccessBinding;
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
