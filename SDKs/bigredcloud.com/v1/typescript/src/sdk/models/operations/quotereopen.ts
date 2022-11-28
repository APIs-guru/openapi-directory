import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuoteReopenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteReopenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuoteReopenPathParams;
}


export class QuoteReopenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteReopen200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
