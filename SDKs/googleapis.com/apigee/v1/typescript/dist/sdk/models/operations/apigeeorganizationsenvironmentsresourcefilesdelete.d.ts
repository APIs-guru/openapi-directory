import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams extends SpeakeasyBase {
    name: string;
    parent: string;
    type: string;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsResourcefilesDeletePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsResourcefilesDeleteQueryParams;
    security: ApigeeOrganizationsEnvironmentsResourcefilesDeleteSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ResourceFile?: shared.GoogleCloudApigeeV1ResourceFile;
    statusCode: number;
}
