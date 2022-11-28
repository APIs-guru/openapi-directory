import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { InvoiceDetailsApiModel } from "./invoicedetailsapimodel";
export declare class ListResultInvoiceDetailsApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: InvoiceDetailsApiModel[];
    totalCount?: number;
}
