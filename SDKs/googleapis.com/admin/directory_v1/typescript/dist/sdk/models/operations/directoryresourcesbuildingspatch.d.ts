import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsPatchPathParams extends SpeakeasyBase {
    buildingId: string;
    customer: string;
}
export declare enum DirectoryResourcesBuildingsPatchCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED",
    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS",
    SourceUnspecified = "SOURCE_UNSPECIFIED"
}
export declare class DirectoryResourcesBuildingsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    coordinatesSource?: DirectoryResourcesBuildingsPatchCoordinatesSourceEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesBuildingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsPatchPathParams;
    queryParams: DirectoryResourcesBuildingsPatchQueryParams;
    request?: shared.Building;
    security: DirectoryResourcesBuildingsPatchSecurity;
}
export declare class DirectoryResourcesBuildingsPatchResponse extends SpeakeasyBase {
    building?: shared.Building;
    contentType: string;
    statusCode: number;
}
