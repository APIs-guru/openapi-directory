import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuoteDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class QuoteDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuoteDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: QuoteDeleteQueryParams;
}


export class QuoteDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
