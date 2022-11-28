import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsQueryParams;
    security: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Deployment?: shared.GoogleCloudApigeeV1Deployment;
    statusCode: number;
}
