import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersDeletePathParams extends SpeakeasyBase {
    groupKey: string;
    memberKey: string;
}
export declare class DirectoryMembersDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersDeleteSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersDeleteSecurityOption1;
    option2?: DirectoryMembersDeleteSecurityOption2;
}
export declare class DirectoryMembersDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersDeletePathParams;
    queryParams: DirectoryMembersDeleteQueryParams;
    security: DirectoryMembersDeleteSecurity;
}
export declare class DirectoryMembersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
