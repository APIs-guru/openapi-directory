import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class UpdateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemPriceMarkdownPromotionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ItemPriceMarkdown;

  @Metadata()
  security: UpdateItemPriceMarkdownPromotionSecurity;
}


export class UpdateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateItemPriceMarkdownPromotion200ApplicationJsonObject?: Map<string, any>;
}
