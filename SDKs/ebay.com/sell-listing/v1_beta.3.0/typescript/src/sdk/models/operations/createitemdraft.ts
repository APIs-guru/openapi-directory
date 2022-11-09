import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateItemDraftHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Language" })
  contentLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class CreateItemDraftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateItemDraftRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateItemDraftHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ItemDraft;

  @Metadata()
  security: CreateItemDraftSecurity;
}


export class CreateItemDraftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemDraftResponse?: shared.ItemDraftResponse;

  @Metadata()
  statusCode: number;
}
