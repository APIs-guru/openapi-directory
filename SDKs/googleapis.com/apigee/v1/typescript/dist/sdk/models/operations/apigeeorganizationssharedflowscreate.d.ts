import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSharedflowsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSharedflowsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    action?: string;
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
export declare class ApigeeOrganizationsSharedflowsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSharedflowsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSharedflowsCreatePathParams;
    queryParams: ApigeeOrganizationsSharedflowsCreateQueryParams;
    request?: shared.GoogleApiHttpBody;
    security: ApigeeOrganizationsSharedflowsCreateSecurity;
}
export declare class ApigeeOrganizationsSharedflowsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SharedFlowRevision?: shared.GoogleCloudApigeeV1SharedFlowRevision;
    statusCode: number;
}
