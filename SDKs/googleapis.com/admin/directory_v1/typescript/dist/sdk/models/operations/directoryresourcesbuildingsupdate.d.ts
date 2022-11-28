import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsUpdatePathParams extends SpeakeasyBase {
    buildingId: string;
    customer: string;
}
export declare enum DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED",
    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS",
    SourceUnspecified = "SOURCE_UNSPECIFIED"
}
export declare class DirectoryResourcesBuildingsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    coordinatesSource?: DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesBuildingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsUpdatePathParams;
    queryParams: DirectoryResourcesBuildingsUpdateQueryParams;
    request?: shared.Building;
    security: DirectoryResourcesBuildingsUpdateSecurity;
}
export declare class DirectoryResourcesBuildingsUpdateResponse extends SpeakeasyBase {
    building?: shared.Building;
    contentType: string;
    statusCode: number;
}
