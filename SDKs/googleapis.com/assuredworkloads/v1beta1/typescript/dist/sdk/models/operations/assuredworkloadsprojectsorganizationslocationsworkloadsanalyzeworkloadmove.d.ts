import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams extends SpeakeasyBase {
    project: string;
    target: string;
}
export declare class AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams;
    queryParams: AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams;
    security: AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity;
}
export declare class AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse?: shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse;
    statusCode: number;
}
