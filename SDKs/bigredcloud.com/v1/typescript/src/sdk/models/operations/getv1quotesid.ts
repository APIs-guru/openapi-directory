import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1QuotesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1QuotesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1QuotesIdPathParams;
}


export class GetV1QuotesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteDto?: shared.QuoteDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
