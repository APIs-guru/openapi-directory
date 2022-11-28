import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherApplicationsDeviceTierConfigsGetPathParams extends SpeakeasyBase {
    deviceTierConfigId: string;
    packageName: string;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherApplicationsDeviceTierConfigsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherApplicationsDeviceTierConfigsGetPathParams;
    queryParams: AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams;
    security: AndroidpublisherApplicationsDeviceTierConfigsGetSecurity;
}
export declare class AndroidpublisherApplicationsDeviceTierConfigsGetResponse extends SpeakeasyBase {
    contentType: string;
    deviceTierConfig?: shared.DeviceTierConfig;
    statusCode: number;
}
