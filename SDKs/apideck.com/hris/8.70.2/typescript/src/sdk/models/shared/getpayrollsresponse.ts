import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payroll } from "./payroll";


export class GetPayrollsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Payroll })
  data: Payroll[];

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
