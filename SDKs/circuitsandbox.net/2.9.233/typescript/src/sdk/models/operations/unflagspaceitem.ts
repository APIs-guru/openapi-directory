import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnflagSpaceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UnflagSpaceItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UnflagSpaceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnflagSpaceItemPathParams;

  @SpeakeasyMetadata()
  security: UnflagSpaceItemSecurity;
}


export class UnflagSpaceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
