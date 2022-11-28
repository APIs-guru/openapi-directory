import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BtPlanListItem } from "./btplanlistitem";



export class BtPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plans", elemType: BtPlanListItem })
  plans: BtPlanListItem[];
}
