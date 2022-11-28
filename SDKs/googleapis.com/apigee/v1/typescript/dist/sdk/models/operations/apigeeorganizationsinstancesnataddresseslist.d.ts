import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesNatAddressesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesNatAddressesListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesNatAddressesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesNatAddressesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesNatAddressesListPathParams;
    queryParams: ApigeeOrganizationsInstancesNatAddressesListQueryParams;
    security: ApigeeOrganizationsInstancesNatAddressesListSecurity;
}
export declare class ApigeeOrganizationsInstancesNatAddressesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListNatAddressesResponse?: shared.GoogleCloudApigeeV1ListNatAddressesResponse;
    statusCode: number;
}
