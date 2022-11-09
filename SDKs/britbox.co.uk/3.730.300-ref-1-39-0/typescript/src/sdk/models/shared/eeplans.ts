import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EePlanListItem } from "./eeplanlistitem";


export class EePlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=plans", elemType: shared.EePlanListItem })
  plans: EePlanListItem[];
}
