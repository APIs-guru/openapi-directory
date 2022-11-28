import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { OrderDetailsApiModel } from "./orderdetailsapimodel";
export declare class ListResultOrderDetailsApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: OrderDetailsApiModel[];
    totalCount?: number;
}
