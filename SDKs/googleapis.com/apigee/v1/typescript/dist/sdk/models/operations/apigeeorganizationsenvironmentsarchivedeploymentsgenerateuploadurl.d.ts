import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlQueryParams;
    request?: Map<string, any>;
    security: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1GenerateUploadUrlResponse?: shared.GoogleCloudApigeeV1GenerateUploadUrlResponse;
    statusCode: number;
}
