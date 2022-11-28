import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RokuPlanListItem } from "./rokuplanlistitem";



export class RokuPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plans", elemType: RokuPlanListItem })
  plans: RokuPlanListItem[];

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions: string;
}
