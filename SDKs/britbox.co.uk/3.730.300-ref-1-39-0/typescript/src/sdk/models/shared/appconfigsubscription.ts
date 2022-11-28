import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";



export class AppConfigSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plans", elemType: Plan })
  plans?: Plan[];
}
