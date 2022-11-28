import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersConfigurationsCreateRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams;
    queryParams: AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams;
    request?: shared.ConfigurationInput;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsCreateResponse extends SpeakeasyBase {
    configuration?: shared.Configuration;
    contentType: string;
    statusCode: number;
}
