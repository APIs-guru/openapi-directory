import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemCondition } from "./itemcondition";



export class ItemConditionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemConditionRequired" })
  itemConditionRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemConditions", elemType: ItemCondition })
  itemConditions?: ItemCondition[];
}
