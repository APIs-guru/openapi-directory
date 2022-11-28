import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsExportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsExportQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsExportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsExportRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsExportPathParams;
    queryParams: AutomlProjectsLocationsModelsExportQueryParams;
    request?: shared.ExportModelRequest;
    security: AutomlProjectsLocationsModelsExportSecurity;
}
export declare class AutomlProjectsLocationsModelsExportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
