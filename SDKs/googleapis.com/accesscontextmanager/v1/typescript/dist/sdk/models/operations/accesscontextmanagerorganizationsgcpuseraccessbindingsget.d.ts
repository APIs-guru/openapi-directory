import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED",
    AsDefined = "AS_DEFINED",
    Cel = "CEL"
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams;
    queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams;
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse extends SpeakeasyBase {
    contentType: string;
    gcpUserAccessBinding?: shared.GcpUserAccessBinding;
    statusCode: number;
}
