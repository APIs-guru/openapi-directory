import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceItem } from "./invoiceitem";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetInvoiceItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.InvoiceItem })
  data: InvoiceItem[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

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
