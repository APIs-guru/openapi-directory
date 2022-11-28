import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiGroceryGroceryListInput } from "./bigovenmodelapigrocerygrocerylist";



export class Api2ControllersWebApiGroceryListControllerPostGroceryListSyncRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: BigOvenModelApiGroceryGroceryListInput;

  @SpeakeasyMetadata({ data: "json, name=since" })
  since?: string;
}
