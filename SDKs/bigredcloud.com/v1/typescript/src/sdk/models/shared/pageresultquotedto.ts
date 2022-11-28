import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuoteDto } from "./quotedto";



export class PageResultQuoteDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: QuoteDto })
  items?: QuoteDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
