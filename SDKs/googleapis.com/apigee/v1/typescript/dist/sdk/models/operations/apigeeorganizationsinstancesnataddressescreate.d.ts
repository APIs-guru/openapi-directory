import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesNatAddressesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesNatAddressesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesNatAddressesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesNatAddressesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesNatAddressesCreatePathParams;
    queryParams: ApigeeOrganizationsInstancesNatAddressesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1NatAddressInput;
    security: ApigeeOrganizationsInstancesNatAddressesCreateSecurity;
}
export declare class ApigeeOrganizationsInstancesNatAddressesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
