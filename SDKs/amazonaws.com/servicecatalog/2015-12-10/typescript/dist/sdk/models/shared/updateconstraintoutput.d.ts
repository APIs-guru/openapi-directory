import { SpeakeasyBase } from "../../../internal/utils";
import { ConstraintDetail } from "./constraintdetail";
import { StatusEnum } from "./statusenum";
export declare class UpdateConstraintOutput extends SpeakeasyBase {
    constraintDetail?: ConstraintDetail;
    constraintParameters?: string;
    status?: StatusEnum;
}
