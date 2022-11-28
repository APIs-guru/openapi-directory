import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams extends SpeakeasyBase {
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
    serviceAccount?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams;
    security: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Deployment?: shared.GoogleCloudApigeeV1Deployment;
    statusCode: number;
}
