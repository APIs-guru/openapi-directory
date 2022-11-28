import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CrmCheckPathParams extends SpeakeasyBase {
    vin: string;
}
export declare class CrmCheckQueryParams extends SpeakeasyBase {
    apiKey?: string;
    saleDate: string;
}
export declare class CrmCheckRequest extends SpeakeasyBase {
    pathParams: CrmCheckPathParams;
    queryParams: CrmCheckQueryParams;
}
export declare class CrmCheckResponse extends SpeakeasyBase {
    crmResponse?: shared.CrmResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
