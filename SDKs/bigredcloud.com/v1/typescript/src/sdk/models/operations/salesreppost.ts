import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesRepPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaleRepsDto;
}


export class SalesRepPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesRepPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
