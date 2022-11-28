import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsPatchRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams;
    queryParams: AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams;
    request?: shared.ConfigurationInput;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsPatchResponse extends SpeakeasyBase {
    configuration?: shared.Configuration;
    contentType: string;
    statusCode: number;
}
