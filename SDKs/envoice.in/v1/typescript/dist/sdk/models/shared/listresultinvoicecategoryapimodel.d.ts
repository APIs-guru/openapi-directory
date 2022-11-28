import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { InvoiceCategoryApiModel } from "./invoicecategoryapimodel";
export declare class ListResultInvoiceCategoryApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: InvoiceCategoryApiModel[];
    totalCount?: number;
}
