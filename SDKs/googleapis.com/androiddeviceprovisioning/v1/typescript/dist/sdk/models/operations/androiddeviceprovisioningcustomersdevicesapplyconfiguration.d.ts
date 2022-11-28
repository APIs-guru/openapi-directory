import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams;
    queryParams: AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams;
    request?: shared.CustomerApplyConfigurationRequest;
}
export declare class AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
