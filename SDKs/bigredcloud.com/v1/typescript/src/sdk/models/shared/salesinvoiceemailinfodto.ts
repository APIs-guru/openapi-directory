import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SalesInvoiceEmailInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=salesInvoiceId" })
  salesInvoiceId?: number;

  @SpeakeasyMetadata({ data: "json, name=toAddress" })
  toAddress?: string;
}
