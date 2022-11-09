import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";
import { Payroll } from "./payroll";


export class EmployeePayrolls extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: Employee;

  @Metadata({ data: "json, name=payrolls", elemType: shared.Payroll })
  payrolls?: Payroll[];
}
