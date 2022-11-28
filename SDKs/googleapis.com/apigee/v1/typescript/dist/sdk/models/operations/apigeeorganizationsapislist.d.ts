import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsApisListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsApisListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeMetaData?: boolean;
    includeRevisions?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsApisListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsApisListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsApisListPathParams;
    queryParams: ApigeeOrganizationsApisListQueryParams;
    security: ApigeeOrganizationsApisListSecurity;
}
export declare class ApigeeOrganizationsApisListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListApiProxiesResponse?: shared.GoogleCloudApigeeV1ListApiProxiesResponse;
    statusCode: number;
}
