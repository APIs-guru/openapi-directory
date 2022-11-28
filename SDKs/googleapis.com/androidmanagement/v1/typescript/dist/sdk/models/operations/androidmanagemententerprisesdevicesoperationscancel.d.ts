import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesDevicesOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesDevicesOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesDevicesOperationsCancelRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesDevicesOperationsCancelPathParams;
    queryParams: AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams;
    security: AndroidmanagementEnterprisesDevicesOperationsCancelSecurity;
}
export declare class AndroidmanagementEnterprisesDevicesOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
