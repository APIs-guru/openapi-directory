import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";



// ChangeSetSummaryListItem
/** 
 * A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
**/
export class ChangeSetSummaryListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSetName" })
  changeSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityIdList" })
  entityIdList?: string[];

  @SpeakeasyMetadata({ data: "json, name=FailureCode" })
  failureCode?: FailureCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ChangeStatusEnum;
}
