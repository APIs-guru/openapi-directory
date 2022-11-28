import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams;
    request?: shared.UnclaimDeviceRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
