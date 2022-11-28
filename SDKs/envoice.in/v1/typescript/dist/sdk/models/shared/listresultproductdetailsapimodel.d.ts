import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { ProductDetailsApiModel } from "./productdetailsapimodel";
export declare class ListResultProductDetailsApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: ProductDetailsApiModel[];
    totalCount?: number;
}
