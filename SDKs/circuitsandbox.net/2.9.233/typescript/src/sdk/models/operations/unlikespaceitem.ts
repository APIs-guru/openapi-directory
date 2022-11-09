import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnlikeSpaceItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UnlikeSpaceItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnlikeSpaceItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnlikeSpaceItemPathParams;

  @Metadata()
  security: UnlikeSpaceItemSecurity;
}


export class UnlikeSpaceItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
