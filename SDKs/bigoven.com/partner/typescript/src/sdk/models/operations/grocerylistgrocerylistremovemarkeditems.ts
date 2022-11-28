import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroceryListGroceryListRemoveMarkedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2GroceryList?: shared.BigOvenModelApi2GroceryList;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
