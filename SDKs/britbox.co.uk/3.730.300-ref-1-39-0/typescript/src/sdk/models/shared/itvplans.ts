import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItvPlanListItem } from "./itvplanlistitem";



export class ItvPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plans", elemType: ItvPlanListItem })
  plans: ItvPlanListItem[];
}
