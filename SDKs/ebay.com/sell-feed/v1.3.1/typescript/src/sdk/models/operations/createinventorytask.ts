import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInventoryTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class CreateInventoryTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateInventoryTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInventoryTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateInventoryTaskRequest;

  @Metadata()
  security: CreateInventoryTaskSecurity;
}


export class CreateInventoryTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
