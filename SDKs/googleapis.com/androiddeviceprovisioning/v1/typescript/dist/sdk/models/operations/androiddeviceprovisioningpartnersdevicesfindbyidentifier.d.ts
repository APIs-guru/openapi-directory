import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams;
    queryParams: AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams;
    request?: shared.FindDevicesByDeviceIdentifierRequest;
}
export declare class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    findDevicesByDeviceIdentifierResponse?: shared.FindDevicesByDeviceIdentifierResponse;
    statusCode: number;
}
