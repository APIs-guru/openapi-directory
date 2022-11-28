import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EstimationChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationChangeStatusApiModel extends SpeakeasyBase {
    id?: number;
    status?: EstimationChangeStatusApiModelStatusEnum;
}
