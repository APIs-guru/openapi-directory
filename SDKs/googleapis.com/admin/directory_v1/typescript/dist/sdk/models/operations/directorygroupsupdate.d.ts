import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsUpdatePathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsUpdatePathParams;
    queryParams: DirectoryGroupsUpdateQueryParams;
    request?: shared.Group;
    security: DirectoryGroupsUpdateSecurity;
}
export declare class DirectoryGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
