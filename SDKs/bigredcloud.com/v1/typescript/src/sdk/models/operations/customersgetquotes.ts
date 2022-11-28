import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersGetQuotesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetQuotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersGetQuotesPathParams;
}


export class CustomersGetQuotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.QuoteDto })
  quoteDtos?: shared.QuoteDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
