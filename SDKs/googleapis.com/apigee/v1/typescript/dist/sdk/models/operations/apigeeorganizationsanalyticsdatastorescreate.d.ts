import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsAnalyticsDatastoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsAnalyticsDatastoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsAnalyticsDatastoresCreatePathParams;
    queryParams: ApigeeOrganizationsAnalyticsDatastoresCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1DatastoreInput;
    security: ApigeeOrganizationsAnalyticsDatastoresCreateSecurity;
}
export declare class ApigeeOrganizationsAnalyticsDatastoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Datastore?: shared.GoogleCloudApigeeV1Datastore;
    statusCode: number;
}
