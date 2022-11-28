import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportQueryParams;
    security: ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DeploymentChangeReport?: shared.GoogleCloudApigeeV1DeploymentChangeReport;
    statusCode: number;
}
