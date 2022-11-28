import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvgroupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvgroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvgroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvgroupsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvgroupsCreatePathParams;
    queryParams: ApigeeOrganizationsEnvgroupsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1EnvironmentGroupInput;
    security: ApigeeOrganizationsEnvgroupsCreateSecurity;
}
export declare class ApigeeOrganizationsEnvgroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
