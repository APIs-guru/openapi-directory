import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsDeletePathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsDeletePathParams;
    queryParams: DirectoryGroupsDeleteQueryParams;
    security: DirectoryGroupsDeleteSecurity;
}
export declare class DirectoryGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
