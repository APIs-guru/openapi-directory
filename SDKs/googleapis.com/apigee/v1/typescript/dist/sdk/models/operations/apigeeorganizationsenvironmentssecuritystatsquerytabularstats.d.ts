import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams extends SpeakeasyBase {
    orgenv: string;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams;
    request?: shared.GoogleCloudApigeeV1QueryTabularStatsRequest;
    security: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1QueryTabularStatsResponse?: shared.GoogleCloudApigeeV1QueryTabularStatsResponse;
    statusCode: number;
}
