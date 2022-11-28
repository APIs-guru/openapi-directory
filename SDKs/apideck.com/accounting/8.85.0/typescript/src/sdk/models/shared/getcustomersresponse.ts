import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountingCustomer } from "./accountingcustomer";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: AccountingCustomer })
  data: AccountingCustomer[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
