import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams;
    request?: shared.UpdateDeviceMetadataInBatchRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
