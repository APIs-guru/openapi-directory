import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesDevicesIssueCommandPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroidmanagementEnterprisesDevicesIssueCommandQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesDevicesIssueCommandSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesDevicesIssueCommandRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesDevicesIssueCommandPathParams;
    queryParams: AndroidmanagementEnterprisesDevicesIssueCommandQueryParams;
    request?: shared.Command;
    security: AndroidmanagementEnterprisesDevicesIssueCommandSecurity;
}
export declare class AndroidmanagementEnterprisesDevicesIssueCommandResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
