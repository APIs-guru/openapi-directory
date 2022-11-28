import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMembersPatchPathParams extends SpeakeasyBase {
    groupKey: string;
    memberKey: string;
}
export declare class DirectoryMembersPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMembersPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMembersPatchSecurity extends SpeakeasyBase {
    option1?: DirectoryMembersPatchSecurityOption1;
    option2?: DirectoryMembersPatchSecurityOption2;
}
export declare class DirectoryMembersPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryMembersPatchPathParams;
    queryParams: DirectoryMembersPatchQueryParams;
    request?: shared.Member;
    security: DirectoryMembersPatchSecurity;
}
export declare class DirectoryMembersPatchResponse extends SpeakeasyBase {
    contentType: string;
    member?: shared.Member;
    statusCode: number;
}
