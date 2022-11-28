import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2GroceryListDepartmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: string;
}
