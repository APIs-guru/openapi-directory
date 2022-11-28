import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesClaimAsyncPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesClaimAsyncQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesClaimAsyncPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesClaimAsyncQueryParams;
    request?: shared.ClaimDevicesRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
