import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BtPlanListItem } from "./btplanlistitem";


export class BtPlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=plans", elemType: shared.BtPlanListItem })
  plans: BtPlanListItem[];
}
