import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuoteClosePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteCloseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuoteClosePathParams;
}


export class QuoteCloseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quoteClose200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
