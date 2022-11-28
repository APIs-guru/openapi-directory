import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesClaimPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesClaimQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesClaimRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesClaimPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesClaimQueryParams;
    request?: shared.ClaimDeviceRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesClaimResponse extends SpeakeasyBase {
    claimDeviceResponse?: shared.ClaimDeviceResponse;
    contentType: string;
    statusCode: number;
}
