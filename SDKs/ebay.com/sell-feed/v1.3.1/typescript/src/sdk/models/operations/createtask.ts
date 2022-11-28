import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId?: string;
}


export class CreateTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateTaskRequest;

  @SpeakeasyMetadata()
  security: CreateTaskSecurity;
}


export class CreateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
