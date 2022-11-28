import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { Payroll } from "./payroll";



export class EmployeePayroll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: Employee;

  @SpeakeasyMetadata({ data: "json, name=payroll" })
  payroll?: Payroll;
}
