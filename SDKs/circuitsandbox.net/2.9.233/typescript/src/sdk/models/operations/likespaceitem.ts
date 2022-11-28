import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LikeSpaceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class LikeSpaceItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class LikeSpaceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LikeSpaceItemPathParams;

  @SpeakeasyMetadata()
  security: LikeSpaceItemSecurity;
}


export class LikeSpaceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
