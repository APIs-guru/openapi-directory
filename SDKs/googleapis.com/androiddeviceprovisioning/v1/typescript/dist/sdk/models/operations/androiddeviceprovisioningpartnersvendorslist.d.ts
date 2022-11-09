import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroiddeviceprovisioningPartnersVendorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroiddeviceprovisioningPartnersVendorsListQueryParams extends SpeakeasyBase {
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
export declare class AndroiddeviceprovisioningPartnersVendorsListRequest extends SpeakeasyBase {
    pathParams: AndroiddeviceprovisioningPartnersVendorsListPathParams;
    queryParams: AndroiddeviceprovisioningPartnersVendorsListQueryParams;
}
export declare class AndroiddeviceprovisioningPartnersVendorsListResponse extends SpeakeasyBase {
    contentType: string;
    listVendorsResponse?: shared.ListVendorsResponse;
    statusCode: number;
}
