import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerSupportCustomer } from "./customersupportcustomer";


export class GetCustomerSupportCustomerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CustomerSupportCustomer;

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
