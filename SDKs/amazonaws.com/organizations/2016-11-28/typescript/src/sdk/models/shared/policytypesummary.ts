import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeStatusEnum } from "./policytypestatusenum";
import { PolicyTypeEnum } from "./policytypeenum";


// PolicyTypeSummary
/** 
 * Contains information about a policy type and its status in the associated root.
**/
export class PolicyTypeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: PolicyTypeStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: PolicyTypeEnum;
}
