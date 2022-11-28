import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsImportDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsDatasetsImportDataQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsDatasetsImportDataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsImportDataRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsImportDataPathParams;
    queryParams: AutomlProjectsLocationsDatasetsImportDataQueryParams;
    request?: shared.ImportDataRequest;
    security: AutomlProjectsLocationsDatasetsImportDataSecurity;
}
export declare class AutomlProjectsLocationsDatasetsImportDataResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
