import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuoteDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuoteDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class QuoteDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuoteDeletePathParams;

  @Metadata()
  queryParams: QuoteDeleteQueryParams;
}


export class QuoteDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quoteDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
