import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    app?: string;
    callback?: string;
    count?: string;
    expand?: boolean;
    fields?: string;
    ids?: string;
    includeCompany?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startKey?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsDevelopersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersListPathParams;
    queryParams: ApigeeOrganizationsDevelopersListQueryParams;
    security: ApigeeOrganizationsDevelopersListSecurity;
}
export declare class ApigeeOrganizationsDevelopersListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListOfDevelopersResponse?: shared.GoogleCloudApigeeV1ListOfDevelopersResponse;
    statusCode: number;
}
