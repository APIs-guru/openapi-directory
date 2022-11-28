import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnlikeSpaceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UnlikeSpaceItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnlikeSpaceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnlikeSpaceItemPathParams;

  @SpeakeasyMetadata()
  security: UnlikeSpaceItemSecurity;
}


export class UnlikeSpaceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
