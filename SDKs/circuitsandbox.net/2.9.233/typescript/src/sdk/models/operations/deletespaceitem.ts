import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSpaceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteSpaceItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteSpaceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSpaceItemPathParams;

  @SpeakeasyMetadata()
  security: DeleteSpaceItemSecurity;
}


export class DeleteSpaceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
