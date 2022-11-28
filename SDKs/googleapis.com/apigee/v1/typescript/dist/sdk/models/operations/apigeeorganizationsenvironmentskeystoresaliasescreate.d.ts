import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    password?: string;
    accessToken?: string;
    alias?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    format?: string;
    ignoreExpiryValidation?: boolean;
    ignoreNewlineValidation?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams;
    request?: shared.GoogleApiHttpBody;
    security: ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Alias?: shared.GoogleCloudApigeeV1Alias;
    statusCode: number;
}
