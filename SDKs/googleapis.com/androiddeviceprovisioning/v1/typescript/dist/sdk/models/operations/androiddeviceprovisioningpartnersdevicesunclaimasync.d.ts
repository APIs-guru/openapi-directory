import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams;
    request?: shared.UnclaimDevicesRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
