import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateQueryParams;
    security: ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
