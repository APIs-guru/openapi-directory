import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintersBatchDeletePrintersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintersBatchDeletePrintersQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomersChromePrintersBatchDeletePrintersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersBatchDeletePrintersRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintersBatchDeletePrintersPathParams;
    queryParams: AdminCustomersChromePrintersBatchDeletePrintersQueryParams;
    request?: shared.BatchDeletePrintersRequest;
    security: AdminCustomersChromePrintersBatchDeletePrintersSecurity;
}
export declare class AdminCustomersChromePrintersBatchDeletePrintersResponse extends SpeakeasyBase {
    batchDeletePrintersResponse?: shared.BatchDeletePrintersResponse;
    contentType: string;
    statusCode: number;
}
