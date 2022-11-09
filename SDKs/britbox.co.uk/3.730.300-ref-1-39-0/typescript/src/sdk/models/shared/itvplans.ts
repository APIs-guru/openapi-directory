import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItvPlanListItem } from "./itvplanlistitem";


export class ItvPlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=plans", elemType: shared.ItvPlanListItem })
  plans: ItvPlanListItem[];
}
