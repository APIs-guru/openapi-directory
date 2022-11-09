import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuotePutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuotePutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuotePutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.QuoteDto;
}


export class QuotePutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotePut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
