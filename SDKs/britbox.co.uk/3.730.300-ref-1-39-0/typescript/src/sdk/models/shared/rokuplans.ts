import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RokuPlanListItem } from "./rokuplanlistitem";


export class RokuPlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=plans", elemType: shared.RokuPlanListItem })
  plans: RokuPlanListItem[];

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions: string;
}
