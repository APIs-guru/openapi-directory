import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersDevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroiddeviceprovisioningCustomersDevicesListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersDevicesListPathParams;
    queryParams: AndroiddeviceprovisioningCustomersDevicesListQueryParams;
}
export declare class AndroiddeviceprovisioningCustomersDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    customerListDevicesResponse?: shared.CustomerListDevicesResponse;
    statusCode: number;
}
