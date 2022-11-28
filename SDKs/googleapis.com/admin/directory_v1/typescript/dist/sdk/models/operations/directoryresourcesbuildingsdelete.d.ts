import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsDeletePathParams extends SpeakeasyBase {
    buildingId: string;
    customer: string;
}
export declare class DirectoryResourcesBuildingsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesBuildingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsDeletePathParams;
    queryParams: DirectoryResourcesBuildingsDeleteQueryParams;
    security: DirectoryResourcesBuildingsDeleteSecurity;
}
export declare class DirectoryResourcesBuildingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
