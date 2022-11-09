import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuoteReopenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteReopenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuoteReopenPathParams;
}


export class QuoteReopenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quoteReopen200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
