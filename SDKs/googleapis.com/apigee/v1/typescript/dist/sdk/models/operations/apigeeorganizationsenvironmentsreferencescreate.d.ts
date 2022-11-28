import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsReferencesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsReferencesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsReferencesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsReferencesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsReferencesCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsReferencesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1Reference;
    security: ApigeeOrganizationsEnvironmentsReferencesCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsReferencesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Reference?: shared.GoogleCloudApigeeV1Reference;
    statusCode: number;
}
