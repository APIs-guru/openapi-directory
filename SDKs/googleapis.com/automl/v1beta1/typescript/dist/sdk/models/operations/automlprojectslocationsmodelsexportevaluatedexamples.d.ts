import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsExportEvaluatedExamplesPathParams;
    queryParams: AutomlProjectsLocationsModelsExportEvaluatedExamplesQueryParams;
    request?: shared.ExportEvaluatedExamplesRequest;
    security: AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity;
}
export declare class AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
