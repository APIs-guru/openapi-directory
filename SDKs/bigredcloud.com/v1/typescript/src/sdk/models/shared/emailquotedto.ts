import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EmailQuoteDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @Metadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @Metadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @Metadata({ data: "json, name=toAddress" })
  toAddress?: string;
}
