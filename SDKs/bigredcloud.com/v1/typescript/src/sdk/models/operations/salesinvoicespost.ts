import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesInvoicesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesInvoicesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoicesPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
