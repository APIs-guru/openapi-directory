import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchPathParams;
    queryParams: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchQueryParams;
    request?: shared.ColumnSpec;
    security: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchResponse extends SpeakeasyBase {
    columnSpec?: shared.ColumnSpec;
    contentType: string;
    statusCode: number;
}
