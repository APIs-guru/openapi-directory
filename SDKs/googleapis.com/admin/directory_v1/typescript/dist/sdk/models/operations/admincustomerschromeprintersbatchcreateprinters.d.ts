import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintersBatchCreatePrintersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintersBatchCreatePrintersQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintersBatchCreatePrintersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersBatchCreatePrintersRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintersBatchCreatePrintersPathParams;
    queryParams: AdminCustomersChromePrintersBatchCreatePrintersQueryParams;
    request?: shared.BatchCreatePrintersRequestInput;
    security: AdminCustomersChromePrintersBatchCreatePrintersSecurity;
}
export declare class AdminCustomersChromePrintersBatchCreatePrintersResponse extends SpeakeasyBase {
    batchCreatePrintersResponse?: shared.BatchCreatePrintersResponse;
    contentType: string;
    statusCode: number;
}
