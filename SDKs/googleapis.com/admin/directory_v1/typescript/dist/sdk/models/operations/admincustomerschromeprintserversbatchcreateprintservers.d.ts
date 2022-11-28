import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintServersBatchCreatePrintServersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintServersBatchCreatePrintServersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintServersBatchCreatePrintServersRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintServersBatchCreatePrintServersPathParams;
    queryParams: AdminCustomersChromePrintServersBatchCreatePrintServersQueryParams;
    request?: shared.BatchCreatePrintServersRequestInput;
    security: AdminCustomersChromePrintServersBatchCreatePrintServersSecurity;
}
export declare class AdminCustomersChromePrintServersBatchCreatePrintServersResponse extends SpeakeasyBase {
    batchCreatePrintServersResponse?: shared.BatchCreatePrintServersResponse;
    contentType: string;
    statusCode: number;
}
