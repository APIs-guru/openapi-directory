import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsAnalyticsDatastoresTestPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresTestQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsAnalyticsDatastoresTestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresTestRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsAnalyticsDatastoresTestPathParams;
    queryParams: ApigeeOrganizationsAnalyticsDatastoresTestQueryParams;
    request?: shared.GoogleCloudApigeeV1DatastoreInput;
    security: ApigeeOrganizationsAnalyticsDatastoresTestSecurity;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresTestResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1TestDatastoreResponse?: shared.GoogleCloudApigeeV1TestDatastoreResponse;
    statusCode: number;
}
