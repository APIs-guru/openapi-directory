import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuotePostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.QuoteDto;
}


export class QuotePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotePost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
