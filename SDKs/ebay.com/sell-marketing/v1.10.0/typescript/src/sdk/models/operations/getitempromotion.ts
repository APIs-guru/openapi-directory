import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: string;
}


export class GetItemPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemPromotionPathParams;

  @SpeakeasyMetadata()
  security: GetItemPromotionSecurity;
}


export class GetItemPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemPromotionResponse?: shared.ItemPromotionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
