import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrQueryParams;
    security: ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
