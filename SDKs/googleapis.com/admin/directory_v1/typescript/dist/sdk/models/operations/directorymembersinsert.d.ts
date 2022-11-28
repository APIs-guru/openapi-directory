import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersInsertPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryMembersInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersInsertSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersInsertSecurityOption1;
    option2?: DirectoryMembersInsertSecurityOption2;
}
export declare class DirectoryMembersInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersInsertPathParams;
    queryParams: DirectoryMembersInsertQueryParams;
    request?: shared.Member;
    security: DirectoryMembersInsertSecurity;
}
export declare class DirectoryMembersInsertResponse extends SpeakeasyBase {
    contentType: string;
    member?: shared.Member;
    statusCode: number;
}
