import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConstraintDetail } from "./constraintdetail";
import { StatusEnum } from "./statusenum";
export declare class CreateConstraintOutput extends SpeakeasyBase {
    constraintDetail?: ConstraintDetail;
    constraintParameters?: string;
    status?: StatusEnum;
}
