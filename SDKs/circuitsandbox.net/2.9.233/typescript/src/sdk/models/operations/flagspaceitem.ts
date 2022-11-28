import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FlagSpaceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class FlagSpaceItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class FlagSpaceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FlagSpaceItemPathParams;

  @SpeakeasyMetadata()
  security: FlagSpaceItemSecurity;
}


export class FlagSpaceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
