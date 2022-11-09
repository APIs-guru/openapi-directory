import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersVendorsCustomersListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams;
    queryParams: AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams;
}
export declare class AndroiddeviceprovisioningPartnersVendorsCustomersListResponse extends SpeakeasyBase {
    contentType: string;
    listVendorCustomersResponse?: shared.ListVendorCustomersResponse;
    statusCode: number;
}
