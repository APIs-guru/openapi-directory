import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesCreatePathParams;
    queryParams: ApigeeOrganizationsInstancesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1InstanceInput;
    security: ApigeeOrganizationsInstancesCreateSecurity;
}
export declare class ApigeeOrganizationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
