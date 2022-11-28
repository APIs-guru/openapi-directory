import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersBatchDeletePrintServersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintServersBatchDeletePrintServersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersBatchDeletePrintServersRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersBatchDeletePrintServersPathParams;
    queryParams: AdminCustomersChromePrintServersBatchDeletePrintServersQueryParams;
    request?: shared.BatchDeletePrintServersRequest;
    security: AdminCustomersChromePrintServersBatchDeletePrintServersSecurity;
}
export declare class AdminCustomersChromePrintServersBatchDeletePrintServersResponse extends SpeakeasyBase {
    batchDeletePrintServersResponse?: shared.BatchDeletePrintServersResponse;
    contentType: string;
    statusCode: number;
}
