import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class GetItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemPriceMarkdownPromotionPathParams;

  @Metadata()
  security: GetItemPriceMarkdownPromotionSecurity;
}


export class GetItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemPriceMarkdown?: shared.ItemPriceMarkdown;

  @Metadata()
  statusCode: number;
}
