import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ItemPriceMarkdown;

  @SpeakeasyMetadata()
  security: CreateItemPriceMarkdownPromotionSecurity;
}


export class CreateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createItemPriceMarkdownPromotion201ApplicationJsonObject?: Map<string, any>;
}
