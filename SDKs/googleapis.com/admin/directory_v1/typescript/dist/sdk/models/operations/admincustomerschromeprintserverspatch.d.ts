import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdminCustomersChromePrintServersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintServersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersPatchRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersPatchPathParams;
    queryParams: AdminCustomersChromePrintServersPatchQueryParams;
    request?: shared.PrintServerInput;
    security: AdminCustomersChromePrintServersPatchSecurity;
}
export declare class AdminCustomersChromePrintServersPatchResponse extends SpeakeasyBase {
    contentType: string;
    printServer?: shared.PrintServer;
    statusCode: number;
}
