import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesBuildingsInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare enum DirectoryResourcesBuildingsInsertCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED",
    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS",
    SourceUnspecified = "SOURCE_UNSPECIFIED"
}
export declare class DirectoryResourcesBuildingsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    coordinatesSource?: DirectoryResourcesBuildingsInsertCoordinatesSourceEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesBuildingsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesBuildingsInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesBuildingsInsertPathParams;
    queryParams: DirectoryResourcesBuildingsInsertQueryParams;
    request?: shared.Building;
    security: DirectoryResourcesBuildingsInsertSecurity;
}
export declare class DirectoryResourcesBuildingsInsertResponse extends SpeakeasyBase {
    building?: shared.Building;
    contentType: string;
    statusCode: number;
}
