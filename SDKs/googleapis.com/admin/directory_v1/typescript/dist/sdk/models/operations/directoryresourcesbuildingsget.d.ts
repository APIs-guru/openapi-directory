import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsGetPathParams extends SpeakeasyBase {
    buildingId: string;
    customer: string;
}
export declare class DirectoryResourcesBuildingsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesBuildingsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsGetSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesBuildingsGetSecurityOption1;
    option2?: DirectoryResourcesBuildingsGetSecurityOption2;
}
export declare class DirectoryResourcesBuildingsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsGetPathParams;
    queryParams: DirectoryResourcesBuildingsGetQueryParams;
    security: DirectoryResourcesBuildingsGetSecurity;
}
export declare class DirectoryResourcesBuildingsGetResponse extends SpeakeasyBase {
    building?: shared.Building;
    contentType: string;
    statusCode: number;
}
