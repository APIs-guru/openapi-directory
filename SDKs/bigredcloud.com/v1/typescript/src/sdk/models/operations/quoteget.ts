import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuoteGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultQuoteDto?: shared.PageResultQuoteDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
