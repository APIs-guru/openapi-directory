import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersDevicesUnclaimQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersDevicesUnclaimRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams;
    queryParams: AndroiddeviceprovisioningCustomersDevicesUnclaimQueryParams;
    request?: shared.CustomerUnclaimDeviceRequest;
}
export declare class AndroiddeviceprovisioningCustomersDevicesUnclaimResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
