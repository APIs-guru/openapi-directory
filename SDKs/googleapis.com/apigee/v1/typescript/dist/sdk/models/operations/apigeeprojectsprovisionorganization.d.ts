import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeProjectsProvisionOrganizationPathParams extends SpeakeasyBase {
    project: string;
}
export declare class ApigeeProjectsProvisionOrganizationQueryParams extends SpeakeasyBase {
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
export declare class ApigeeProjectsProvisionOrganizationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeProjectsProvisionOrganizationRequest extends SpeakeasyBase {
    pathParams: ApigeeProjectsProvisionOrganizationPathParams;
    queryParams: ApigeeProjectsProvisionOrganizationQueryParams;
    request?: shared.GoogleCloudApigeeV1ProvisionOrganizationRequest;
    security: ApigeeProjectsProvisionOrganizationSecurity;
}
export declare class ApigeeProjectsProvisionOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
