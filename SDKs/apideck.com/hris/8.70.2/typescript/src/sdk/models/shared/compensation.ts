import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Benefit } from "./benefit";
import { Deduction } from "./deduction";
import { Tax } from "./tax";


export class Compensation extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefits", elemType: shared.Benefit })
  benefits?: Benefit[];

  @Metadata({ data: "json, name=deductions", elemType: shared.Deduction })
  deductions?: Deduction[];

  @Metadata({ data: "json, name=employee_id" })
  employeeId: string;

  @Metadata({ data: "json, name=gross_pay" })
  grossPay?: number;

  @Metadata({ data: "json, name=net_pay" })
  netPay?: number;

  @Metadata({ data: "json, name=taxes", elemType: shared.Tax })
  taxes?: Tax[];
}
