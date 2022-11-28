import { SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { EstimationDetailsApiModel } from "./estimationdetailsapimodel";
export declare class ListResultEstimationDetailsApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: EstimationDetailsApiModel[];
    totalCount?: number;
}
