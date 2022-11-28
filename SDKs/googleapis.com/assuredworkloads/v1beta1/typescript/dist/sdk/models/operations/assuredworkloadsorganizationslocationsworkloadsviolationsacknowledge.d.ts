import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams;
    request?: shared.GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse?: Map<string, any>;
    statusCode: number;
}
