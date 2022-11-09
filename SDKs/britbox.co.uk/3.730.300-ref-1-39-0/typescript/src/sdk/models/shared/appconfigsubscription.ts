import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Plan } from "./plan";


export class AppConfigSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=plans", elemType: shared.Plan })
  plans?: Plan[];
}
