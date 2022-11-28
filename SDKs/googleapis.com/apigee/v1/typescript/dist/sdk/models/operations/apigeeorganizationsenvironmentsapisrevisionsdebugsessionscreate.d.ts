import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    timeout?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DebugSessionInput;
    security: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1DebugSession?: shared.GoogleCloudApigeeV1DebugSession;
    statusCode: number;
}
