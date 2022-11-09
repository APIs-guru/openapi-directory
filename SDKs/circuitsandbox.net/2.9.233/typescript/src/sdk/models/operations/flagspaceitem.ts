import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FlagSpaceItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class FlagSpaceItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class FlagSpaceItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FlagSpaceItemPathParams;

  @Metadata()
  security: FlagSpaceItemSecurity;
}


export class FlagSpaceItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
