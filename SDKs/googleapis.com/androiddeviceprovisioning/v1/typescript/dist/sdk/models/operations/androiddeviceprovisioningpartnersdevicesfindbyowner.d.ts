import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesFindByOwnerQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesFindByOwnerQueryParams;
    request?: shared.FindDevicesByOwnerRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse extends SpeakeasyBase {
    contentType: string;
    findDevicesByOwnerResponse?: shared.FindDevicesByOwnerResponse;
    statusCode: number;
}
