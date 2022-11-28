import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class DeleteItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteItemPriceMarkdownPromotionPathParams;

  @SpeakeasyMetadata()
  security: DeleteItemPriceMarkdownPromotionSecurity;
}


export class DeleteItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
