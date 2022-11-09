import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOrderTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class CreateOrderTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateOrderTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOrderTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOrderTaskRequest;

  @Metadata()
  security: CreateOrderTaskSecurity;
}


export class CreateOrderTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
