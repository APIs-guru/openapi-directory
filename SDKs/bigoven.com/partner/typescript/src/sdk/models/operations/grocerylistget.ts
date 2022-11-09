import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroceryListGetResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2GroceryList?: shared.BigOvenModelApi2GroceryList;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
