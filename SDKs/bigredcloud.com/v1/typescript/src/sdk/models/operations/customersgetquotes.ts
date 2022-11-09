import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersGetQuotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetQuotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersGetQuotesPathParams;
}


export class CustomersGetQuotesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.QuoteDto })
  quoteDtos?: shared.QuoteDto[];

  @Metadata()
  statusCode: number;
}
