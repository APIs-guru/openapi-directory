import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeSummary } from "./changesummary";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";



export class DescribeChangeSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeSet", elemType: ChangeSummary })
  changeSet?: ChangeSummary[];

  @SpeakeasyMetadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSetName" })
  changeSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureCode" })
  failureCode?: FailureCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureDescription" })
  failureDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ChangeStatusEnum;
}
