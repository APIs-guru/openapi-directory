import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EePlanListItem } from "./eeplanlistitem";



export class EePlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plans", elemType: EePlanListItem })
  plans: EePlanListItem[];
}
