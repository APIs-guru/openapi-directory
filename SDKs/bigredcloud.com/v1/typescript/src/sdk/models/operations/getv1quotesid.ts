import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1QuotesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1QuotesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1QuotesIdPathParams;
}


export class GetV1QuotesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quoteDto?: shared.QuoteDto;

  @Metadata()
  statusCode: number;
}
