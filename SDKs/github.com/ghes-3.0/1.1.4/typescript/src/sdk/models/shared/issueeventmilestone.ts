import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssueEventMilestone
/** 
 * Issue Event Milestone
**/
export class IssueEventMilestone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
