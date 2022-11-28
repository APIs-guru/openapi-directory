import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeStatusEnum } from "./policytypestatusenum";
import { PolicyTypeEnum } from "./policytypeenum";



// PolicyTypeSummary
/** 
 * Contains information about a policy type and its status in the associated root.
**/
export class PolicyTypeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: PolicyTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: PolicyTypeEnum;
}
