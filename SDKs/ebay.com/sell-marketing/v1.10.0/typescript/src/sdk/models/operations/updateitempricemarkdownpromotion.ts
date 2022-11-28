import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class UpdateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemPriceMarkdownPromotionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ItemPriceMarkdown;

  @SpeakeasyMetadata()
  security: UpdateItemPriceMarkdownPromotionSecurity;
}


export class UpdateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateItemPriceMarkdownPromotion200ApplicationJsonObject?: Map<string, any>;
}
