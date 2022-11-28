import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlQueryParams;
    request?: Map<string, any>;
    security: ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1GenerateDownloadUrlResponse?: shared.GoogleCloudApigeeV1GenerateDownloadUrlResponse;
    statusCode: number;
}
