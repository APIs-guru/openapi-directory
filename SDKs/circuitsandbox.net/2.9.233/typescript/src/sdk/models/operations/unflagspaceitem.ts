import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnflagSpaceItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UnflagSpaceItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnflagSpaceItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnflagSpaceItemPathParams;

  @Metadata()
  security: UnflagSpaceItemSecurity;
}


export class UnflagSpaceItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
