import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersCustomersListPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class AndroiddeviceprovisioningPartnersCustomersListQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersCustomersListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersCustomersListPathParams;
    queryParams: AndroiddeviceprovisioningPartnersCustomersListQueryParams;
}
export declare class AndroiddeviceprovisioningPartnersCustomersListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomersResponse?: shared.ListCustomersResponse;
    statusCode: number;
}
