import { SpeakeasyBase } from "../../../internal/utils";
import { Benefit } from "./benefit";
import { Deduction } from "./deduction";
import { Tax } from "./tax";
export declare class Compensation extends SpeakeasyBase {
    benefits?: Benefit[];
    deductions?: Deduction[];
    employeeId: string;
    grossPay?: number;
    netPay?: number;
    taxes?: Tax[];
}
