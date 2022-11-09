import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesMetadataPathParams extends SpeakeasyBase {
    deviceId: string;
    metadataOwnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesMetadataRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesMetadataPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams;
    request?: shared.UpdateDeviceMetadataRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesMetadataResponse extends SpeakeasyBase {
    contentType: string;
    deviceMetadata?: shared.DeviceMetadata;
    statusCode: number;
}
