import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersConfigurationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsListQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningCustomersConfigurationsListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningCustomersConfigurationsListPathParams;
    queryParams: AndroiddeviceprovisioningCustomersConfigurationsListQueryParams;
}
export declare class AndroiddeviceprovisioningCustomersConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    customerListConfigurationsResponse?: shared.CustomerListConfigurationsResponse;
    statusCode: number;
}
