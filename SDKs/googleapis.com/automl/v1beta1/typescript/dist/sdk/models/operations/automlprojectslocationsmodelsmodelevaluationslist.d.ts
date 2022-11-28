import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsModelEvaluationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsModelsModelEvaluationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AutomlProjectsLocationsModelsModelEvaluationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsModelEvaluationsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsModelEvaluationsListPathParams;
    queryParams: AutomlProjectsLocationsModelsModelEvaluationsListQueryParams;
    security: AutomlProjectsLocationsModelsModelEvaluationsListSecurity;
}
export declare class AutomlProjectsLocationsModelsModelEvaluationsListResponse extends SpeakeasyBase {
    contentType: string;
    listModelEvaluationsResponse?: shared.ListModelEvaluationsResponse;
    statusCode: number;
}
