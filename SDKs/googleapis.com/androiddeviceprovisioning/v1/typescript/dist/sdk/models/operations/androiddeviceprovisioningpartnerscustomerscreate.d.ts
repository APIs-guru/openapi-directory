import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersCustomersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningPartnersCustomersCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersCustomersCreateRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersCustomersCreatePathParams;
    queryParams: AndroiddeviceprovisioningPartnersCustomersCreateQueryParams;
    request?: shared.CreateCustomerRequestInput;
}
export declare class AndroiddeviceprovisioningPartnersCustomersCreateResponse extends SpeakeasyBase {
    company?: shared.Company;
    contentType: string;
    statusCode: number;
}
