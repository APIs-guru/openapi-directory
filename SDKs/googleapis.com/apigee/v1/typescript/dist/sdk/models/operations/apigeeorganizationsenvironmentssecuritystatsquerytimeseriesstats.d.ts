import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsPathParams extends SpeakeasyBase {
    orgenv: string;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsQueryParams;
    request?: shared.GoogleCloudApigeeV1QueryTimeSeriesStatsRequest;
    security: ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1QueryTimeSeriesStatsResponse?: shared.GoogleCloudApigeeV1QueryTimeSeriesStatsResponse;
    statusCode: number;
}
