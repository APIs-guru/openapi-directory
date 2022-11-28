import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionQueryParams extends SpeakeasyBase {
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
    validate?: boolean;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionPathParams;
    queryParams: ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionQueryParams;
    request?: shared.GoogleApiHttpBody;
    security: ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionSecurity;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1SharedFlowRevision?: shared.GoogleCloudApigeeV1SharedFlowRevision;
    statusCode: number;
}
