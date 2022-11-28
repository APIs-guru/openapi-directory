import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    override?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportQueryParams;
    security: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeploymentChangeReport?: shared.GoogleCloudApigeeV1DeploymentChangeReport;
    statusCode: number;
}
