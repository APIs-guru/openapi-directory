import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class GetItemPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemPromotionPathParams;

  @Metadata()
  security: GetItemPromotionSecurity;
}


export class GetItemPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemPromotionResponse?: shared.ItemPromotionResponse;

  @Metadata()
  statusCode: number;
}
