import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Benefit } from "./benefit";
import { Deduction } from "./deduction";
import { Tax } from "./tax";



export class Compensation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefits", elemType: Benefit })
  benefits?: Benefit[];

  @SpeakeasyMetadata({ data: "json, name=deductions", elemType: Deduction })
  deductions?: Deduction[];

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "json, name=gross_pay" })
  grossPay?: number;

  @SpeakeasyMetadata({ data: "json, name=net_pay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: Tax })
  taxes?: Tax[];
}
