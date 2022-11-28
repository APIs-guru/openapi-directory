import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowUnknownDevices?: boolean;
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
export declare class AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams;
    queryParams: AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams;
    request?: shared.DeviceTierConfigInput;
    security: AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceTierConfig?: shared.DeviceTierConfig;
    statusCode: number;
}
