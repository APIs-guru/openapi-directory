import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsDevelopersAttributesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsDevelopersAttributesListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsDevelopersAttributesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsDevelopersAttributesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsDevelopersAttributesListPathParams;
    queryParams: ApigeeOrganizationsDevelopersAttributesListQueryParams;
    security: ApigeeOrganizationsDevelopersAttributesListSecurity;
}
export declare class ApigeeOrganizationsDevelopersAttributesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1Attributes?: shared.GoogleCloudApigeeV1Attributes;
    statusCode: number;
}
