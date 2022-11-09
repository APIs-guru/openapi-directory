import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmployeePayrolls } from "./employeepayrolls";


export class GetEmployeePayrollsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: EmployeePayrolls;

  @Metadata({ data: "json, name=operation" })
  operation: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
