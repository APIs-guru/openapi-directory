import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1ArchiveDeploymentInput;
    security: ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
