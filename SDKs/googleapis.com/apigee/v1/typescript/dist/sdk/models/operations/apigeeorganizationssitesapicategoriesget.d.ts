import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSitesApicategoriesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    envgroupHostname?: string;
    fields?: string;
    filter?: string;
    format?: string;
    key?: string;
    limit?: string;
    oauthToken?: string;
    offset?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    realtime?: boolean;
    select?: string;
    sort?: string;
    sortby?: string;
    timeRange?: string;
    timeUnit?: string;
    topk?: string;
    tsAscending?: boolean;
    tzo?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSitesApicategoriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSitesApicategoriesGetRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSitesApicategoriesGetPathParams;
    queryParams: ApigeeOrganizationsSitesApicategoriesGetQueryParams;
    security: ApigeeOrganizationsSitesApicategoriesGetSecurity;
}
export declare class ApigeeOrganizationsSitesApicategoriesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ApiCategory?: shared.GoogleCloudApigeeV1ApiCategory;
    statusCode: number;
}
