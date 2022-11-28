import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersGetPathParams extends SpeakeasyBase {
    groupKey: string;
    memberKey: string;
}
export declare class DirectoryMembersGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersGetSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersGetSecurityOption1;
    option2?: DirectoryMembersGetSecurityOption2;
    option3?: DirectoryMembersGetSecurityOption3;
    option4?: DirectoryMembersGetSecurityOption4;
}
export declare class DirectoryMembersGetRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersGetPathParams;
    queryParams: DirectoryMembersGetQueryParams;
    security: DirectoryMembersGetSecurity;
}
export declare class DirectoryMembersGetResponse extends SpeakeasyBase {
    contentType: string;
    member?: shared.Member;
    statusCode: number;
}
