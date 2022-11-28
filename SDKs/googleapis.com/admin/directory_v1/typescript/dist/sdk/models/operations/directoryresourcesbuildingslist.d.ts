import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryResourcesBuildingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesBuildingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsListSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesBuildingsListSecurityOption1;
    option2?: DirectoryResourcesBuildingsListSecurityOption2;
}
export declare class DirectoryResourcesBuildingsListRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsListPathParams;
    queryParams: DirectoryResourcesBuildingsListQueryParams;
    security: DirectoryResourcesBuildingsListSecurity;
}
export declare class DirectoryResourcesBuildingsListResponse extends SpeakeasyBase {
    buildings?: shared.Buildings;
    contentType: string;
    statusCode: number;
}
