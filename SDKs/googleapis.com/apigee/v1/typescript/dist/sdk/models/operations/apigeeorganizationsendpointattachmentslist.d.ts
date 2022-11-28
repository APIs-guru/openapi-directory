import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEndpointAttachmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEndpointAttachmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEndpointAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEndpointAttachmentsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEndpointAttachmentsListPathParams;
    queryParams: ApigeeOrganizationsEndpointAttachmentsListQueryParams;
    security: ApigeeOrganizationsEndpointAttachmentsListSecurity;
}
export declare class ApigeeOrganizationsEndpointAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListEndpointAttachmentsResponse?: shared.GoogleCloudApigeeV1ListEndpointAttachmentsResponse;
    statusCode: number;
}
