import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuoteClosePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteCloseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuoteClosePathParams;
}


export class QuoteCloseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteClose200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
