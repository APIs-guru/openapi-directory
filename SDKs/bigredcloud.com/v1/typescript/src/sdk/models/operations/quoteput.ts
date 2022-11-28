import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuotePutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class QuotePutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuotePutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.QuoteDto;
}


export class QuotePutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quotePut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
