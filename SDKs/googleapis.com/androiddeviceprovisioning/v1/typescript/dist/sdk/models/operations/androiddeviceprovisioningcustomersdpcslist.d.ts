import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersDpcsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersDpcsListQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersDpcsListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersDpcsListPathParams;
    queryParams: AndroiddeviceprovisioningCustomersDpcsListQueryParams;
}
export declare class AndroiddeviceprovisioningCustomersDpcsListResponse extends SpeakeasyBase {
    contentType: string;
    customerListDpcsResponse?: shared.CustomerListDpcsResponse;
    statusCode: number;
}
