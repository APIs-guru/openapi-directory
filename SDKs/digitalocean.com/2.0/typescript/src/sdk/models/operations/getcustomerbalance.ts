import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerBalance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_balance" })
  accountBalance?: string;

  @Metadata({ data: "json, name=generated_at" })
  generatedAt?: Date;

  @Metadata({ data: "json, name=month_to_date_balance" })
  monthToDateBalance?: string;

  @Metadata({ data: "json, name=month_to_date_usage" })
  monthToDateUsage?: string;
}


export class GetCustomerBalance401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetCustomerBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCustomerBalance200ApplicationJsonObject?: GetCustomerBalance200ApplicationJson;

  @Metadata()
  getCustomerBalance401ApplicationJsonObject?: GetCustomerBalance401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
