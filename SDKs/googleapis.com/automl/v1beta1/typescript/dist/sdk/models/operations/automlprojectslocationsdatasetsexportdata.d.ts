import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsExportDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsDatasetsExportDataQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsDatasetsExportDataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsExportDataRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsExportDataPathParams;
    queryParams: AutomlProjectsLocationsDatasetsExportDataQueryParams;
    request?: shared.ExportDataRequest;
    security: AutomlProjectsLocationsDatasetsExportDataSecurity;
}
export declare class AutomlProjectsLocationsDatasetsExportDataResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
