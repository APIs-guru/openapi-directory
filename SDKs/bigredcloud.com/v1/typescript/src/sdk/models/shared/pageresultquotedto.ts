import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuoteDto } from "./quotedto";


export class PageResultQuoteDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.QuoteDto })
  items?: QuoteDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
