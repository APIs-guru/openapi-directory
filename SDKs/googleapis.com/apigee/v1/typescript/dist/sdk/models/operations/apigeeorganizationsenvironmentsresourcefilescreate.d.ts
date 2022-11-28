import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams extends SpeakeasyBase {
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
    type?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsResourcefilesCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsResourcefilesCreateQueryParams;
    request?: shared.GoogleApiHttpBody;
    security: ApigeeOrganizationsEnvironmentsResourcefilesCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ResourceFile?: shared.GoogleCloudApigeeV1ResourceFile;
    statusCode: number;
}
