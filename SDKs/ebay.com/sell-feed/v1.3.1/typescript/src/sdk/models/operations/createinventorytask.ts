import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInventoryTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class CreateInventoryTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateInventoryTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateInventoryTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateInventoryTaskRequest;

  @SpeakeasyMetadata()
  security: CreateInventoryTaskSecurity;
}


export class CreateInventoryTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
