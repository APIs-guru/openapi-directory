import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesAttachmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesAttachmentsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesAttachmentsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesAttachmentsListPathParams;
    queryParams: ApigeeOrganizationsInstancesAttachmentsListQueryParams;
    security: ApigeeOrganizationsInstancesAttachmentsListSecurity;
}
export declare class ApigeeOrganizationsInstancesAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListInstanceAttachmentsResponse?: shared.GoogleCloudApigeeV1ListInstanceAttachmentsResponse;
    statusCode: number;
}
