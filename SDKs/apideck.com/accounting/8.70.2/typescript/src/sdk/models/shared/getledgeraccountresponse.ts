import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLedgerAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

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
