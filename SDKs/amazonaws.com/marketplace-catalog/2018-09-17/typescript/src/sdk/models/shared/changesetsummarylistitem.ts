import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";


// ChangeSetSummaryListItem
/** 
 * A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
**/
export class ChangeSetSummaryListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @Metadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;

  @Metadata({ data: "json, name=ChangeSetName" })
  changeSetName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: string;

  @Metadata({ data: "json, name=EntityIdList" })
  entityIdList?: string[];

  @Metadata({ data: "json, name=FailureCode" })
  failureCode?: FailureCodeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ChangeStatusEnum;
}
