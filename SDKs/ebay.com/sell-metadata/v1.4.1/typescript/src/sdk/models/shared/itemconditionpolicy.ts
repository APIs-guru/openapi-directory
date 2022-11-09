import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemCondition } from "./itemcondition";


export class ItemConditionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @Metadata({ data: "json, name=itemConditionRequired" })
  itemConditionRequired?: boolean;

  @Metadata({ data: "json, name=itemConditions", elemType: shared.ItemCondition })
  itemConditions?: ItemCondition[];
}
