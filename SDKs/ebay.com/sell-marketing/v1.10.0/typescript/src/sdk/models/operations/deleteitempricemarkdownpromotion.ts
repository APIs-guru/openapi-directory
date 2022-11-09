import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class DeleteItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteItemPriceMarkdownPromotionPathParams;

  @Metadata()
  security: DeleteItemPriceMarkdownPromotionSecurity;
}


export class DeleteItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
