import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomerDevicesChromeosIssueCommandPathParams extends SpeakeasyBase {
    customerId: string;
    deviceId: string;
}
export declare class AdminCustomerDevicesChromeosIssueCommandQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomerDevicesChromeosIssueCommandSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomerDevicesChromeosIssueCommandRequest extends SpeakeasyBase {
    pathParams: AdminCustomerDevicesChromeosIssueCommandPathParams;
    queryParams: AdminCustomerDevicesChromeosIssueCommandQueryParams;
    request?: shared.DirectoryChromeosdevicesIssueCommandRequest;
    security: AdminCustomerDevicesChromeosIssueCommandSecurity;
}
export declare class AdminCustomerDevicesChromeosIssueCommandResponse extends SpeakeasyBase {
    contentType: string;
    directoryChromeosdevicesIssueCommandResponse?: shared.DirectoryChromeosdevicesIssueCommandResponse;
    statusCode: number;
}
