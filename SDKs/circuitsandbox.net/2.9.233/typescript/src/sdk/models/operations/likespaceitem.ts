import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LikeSpaceItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class LikeSpaceItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class LikeSpaceItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LikeSpaceItemPathParams;

  @Metadata()
  security: LikeSpaceItemSecurity;
}


export class LikeSpaceItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
