import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesNatAddressesActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeOrganizationsInstancesNatAddressesActivateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesNatAddressesActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesNatAddressesActivateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesNatAddressesActivatePathParams;
    queryParams: ApigeeOrganizationsInstancesNatAddressesActivateQueryParams;
    request?: Map<string, any>;
    security: ApigeeOrganizationsInstancesNatAddressesActivateSecurity;
}
export declare class ApigeeOrganizationsInstancesNatAddressesActivateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
