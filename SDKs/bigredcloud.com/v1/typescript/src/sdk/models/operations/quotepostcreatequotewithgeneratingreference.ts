import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuotePostCreateQuoteWithGeneratingReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.QuoteDto;
}


export class QuotePostCreateQuoteWithGeneratingReferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotePostCreateQuoteWithGeneratingReference200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
