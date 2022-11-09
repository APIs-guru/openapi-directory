import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams;
    queryParams: AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationQueryParams;
    request?: shared.CustomerRemoveConfigurationRequest;
}
export declare class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
