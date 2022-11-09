import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Employee } from "./employee";
import { Payroll } from "./payroll";


export class EmployeePayroll extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: Employee;

  @Metadata({ data: "json, name=payroll" })
  payroll?: Payroll;
}
