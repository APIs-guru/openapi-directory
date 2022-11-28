import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEndpointAttachmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEndpointAttachmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endpointAttachmentId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEndpointAttachmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEndpointAttachmentsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEndpointAttachmentsCreatePathParams;
    queryParams: ApigeeOrganizationsEndpointAttachmentsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1EndpointAttachmentInput;
    security: ApigeeOrganizationsEndpointAttachmentsCreateSecurity;
}
export declare class ApigeeOrganizationsEndpointAttachmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
