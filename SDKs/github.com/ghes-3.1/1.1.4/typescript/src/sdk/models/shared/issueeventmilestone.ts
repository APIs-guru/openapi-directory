import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssueEventMilestone
/** 
 * Issue Event Milestone
**/
export class IssueEventMilestone extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title: string;
}
