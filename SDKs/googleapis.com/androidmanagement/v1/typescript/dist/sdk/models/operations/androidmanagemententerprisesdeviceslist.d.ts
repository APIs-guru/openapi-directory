import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidmanagementEnterprisesDevicesListQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesDevicesListRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesDevicesListPathParams;
    queryParams: AndroidmanagementEnterprisesDevicesListQueryParams;
    security: AndroidmanagementEnterprisesDevicesListSecurity;
}
export declare class AndroidmanagementEnterprisesDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
}
