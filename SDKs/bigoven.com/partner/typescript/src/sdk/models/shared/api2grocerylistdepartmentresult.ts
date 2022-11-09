import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2GroceryListDepartmentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=dept" })
  dept?: string;

  @Metadata({ data: "json, name=item" })
  item?: string;
}
