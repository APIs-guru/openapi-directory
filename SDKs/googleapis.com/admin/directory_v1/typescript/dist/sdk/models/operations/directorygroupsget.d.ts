import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsGetPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsGetSecurity extends SpeakeasyBase {
    option1?: DirectoryGroupsGetSecurityOption1;
    option2?: DirectoryGroupsGetSecurityOption2;
}
export declare class DirectoryGroupsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsGetPathParams;
    queryParams: DirectoryGroupsGetQueryParams;
    security: DirectoryGroupsGetSecurity;
}
export declare class DirectoryGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
