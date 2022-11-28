import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomersChromePrintersListPrinterModelsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdminCustomersChromePrintersListPrinterModelsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintersListPrinterModelsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersListPrinterModelsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomersChromePrintersListPrinterModelsSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintersListPrinterModelsSecurityOption1;
    option2?: AdminCustomersChromePrintersListPrinterModelsSecurityOption2;
}
export declare class AdminCustomersChromePrintersListPrinterModelsRequest extends SpeakeasyBase {
    pathParams: AdminCustomersChromePrintersListPrinterModelsPathParams;
    queryParams: AdminCustomersChromePrintersListPrinterModelsQueryParams;
    security: AdminCustomersChromePrintersListPrinterModelsSecurity;
}
export declare class AdminCustomersChromePrintersListPrinterModelsResponse extends SpeakeasyBase {
    contentType: string;
    listPrinterModelsResponse?: shared.ListPrinterModelsResponse;
    statusCode: number;
}
