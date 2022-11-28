import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateItemDraftHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Language" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class CreateItemDraftSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateItemDraftRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateItemDraftHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ItemDraft;

  @SpeakeasyMetadata()
  security: CreateItemDraftSecurity;
}


export class CreateItemDraftResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemDraftResponse?: shared.ItemDraftResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
