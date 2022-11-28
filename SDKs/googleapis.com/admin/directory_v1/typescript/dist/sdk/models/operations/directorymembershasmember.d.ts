import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersHasMemberPathParams extends SpeakeasyBase {
    groupKey: string;
    memberKey: string;
}
export declare class DirectoryMembersHasMemberQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersHasMemberSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersHasMemberSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersHasMemberSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersHasMemberSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersHasMemberSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersHasMemberSecurityOption1;
    option2?: DirectoryMembersHasMemberSecurityOption2;
    option3?: DirectoryMembersHasMemberSecurityOption3;
    option4?: DirectoryMembersHasMemberSecurityOption4;
}
export declare class DirectoryMembersHasMemberRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersHasMemberPathParams;
    queryParams: DirectoryMembersHasMemberQueryParams;
    security: DirectoryMembersHasMemberSecurity;
}
export declare class DirectoryMembersHasMemberResponse extends SpeakeasyBase {
    contentType: string;
    membersHasMember?: shared.MembersHasMember;
    statusCode: number;
}
