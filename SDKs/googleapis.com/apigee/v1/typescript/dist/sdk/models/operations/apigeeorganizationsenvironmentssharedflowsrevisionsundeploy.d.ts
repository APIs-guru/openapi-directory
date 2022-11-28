import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sequencedRollout?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployQueryParams;
    security: ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploySecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
