import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuoteGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultQuoteDto?: shared.PageResultQuoteDto;

  @Metadata()
  statusCode: number;
}
