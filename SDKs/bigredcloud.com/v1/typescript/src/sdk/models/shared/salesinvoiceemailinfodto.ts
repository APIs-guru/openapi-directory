import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SalesInvoiceEmailInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @Metadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @Metadata({ data: "json, name=salesInvoiceId" })
  salesInvoiceId?: number;

  @Metadata({ data: "json, name=toAddress" })
  toAddress?: string;
}
