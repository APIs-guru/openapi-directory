import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersUpdatePathParams extends SpeakeasyBase {
    groupKey: string;
    memberKey: string;
}
export declare class DirectoryMembersUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersUpdateSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersUpdateSecurityOption1;
    option2?: DirectoryMembersUpdateSecurityOption2;
}
export declare class DirectoryMembersUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersUpdatePathParams;
    queryParams: DirectoryMembersUpdateQueryParams;
    request?: shared.Member;
    security: DirectoryMembersUpdateSecurity;
}
export declare class DirectoryMembersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    member?: shared.Member;
    statusCode: number;
}
