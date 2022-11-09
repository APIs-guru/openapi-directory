import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EmailSendQuoteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EmailQuoteDto;
}


export class EmailSendQuoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  emailSendQuote200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
