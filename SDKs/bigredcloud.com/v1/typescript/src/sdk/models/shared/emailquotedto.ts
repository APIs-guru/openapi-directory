import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmailQuoteDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bccAddresses" })
  bccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=messageBody" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @SpeakeasyMetadata({ data: "json, name=toAddress" })
  toAddress?: string;
}
