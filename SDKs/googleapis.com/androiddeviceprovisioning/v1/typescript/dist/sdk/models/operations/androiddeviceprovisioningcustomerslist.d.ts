import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningCustomersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroiddeviceprovisioningCustomersListRequest extends SpeakeasyBase {
    queryParams: AndroiddeviceprovisioningCustomersListQueryParams;
}
export declare class AndroiddeviceprovisioningCustomersListResponse extends SpeakeasyBase {
    contentType: string;
    customerListCustomersResponse?: shared.CustomerListCustomersResponse;
    statusCode: number;
}
