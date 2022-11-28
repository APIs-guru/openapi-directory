import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class GetItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemPriceMarkdownPromotionPathParams;

  @SpeakeasyMetadata()
  security: GetItemPriceMarkdownPromotionSecurity;
}


export class GetItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemPriceMarkdown?: shared.ItemPriceMarkdown;

  @SpeakeasyMetadata()
  statusCode: number;
}
