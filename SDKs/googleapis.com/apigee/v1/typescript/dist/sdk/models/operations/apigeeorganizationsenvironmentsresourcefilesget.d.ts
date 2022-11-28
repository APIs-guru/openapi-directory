import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsResourcefilesGetPathParams extends SpeakeasyBase {
    name: string;
    parent: string;
    type: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesGetQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsResourcefilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesGetRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsResourcefilesGetPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsResourcefilesGetQueryParams;
    security: ApigeeOrganizationsEnvironmentsResourcefilesGetSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
