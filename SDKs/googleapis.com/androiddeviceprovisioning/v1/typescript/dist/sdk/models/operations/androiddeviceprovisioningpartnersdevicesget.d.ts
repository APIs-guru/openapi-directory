import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesGetRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesGetPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesGetQueryParams;
}
export declare class AndroiddeviceprovisioningPartnersDevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
