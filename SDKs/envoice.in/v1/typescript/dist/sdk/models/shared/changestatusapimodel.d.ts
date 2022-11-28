import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class ChangeStatusApiModel extends SpeakeasyBase {
    id?: number;
    status?: ChangeStatusApiModelStatusEnum;
}
