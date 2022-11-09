import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeSummary } from "./changesummary";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";


export class DescribeChangeSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeSet", elemType: shared.ChangeSummary })
  changeSet?: ChangeSummary[];

  @Metadata({ data: "json, name=ChangeSetArn" })
  changeSetArn?: string;

  @Metadata({ data: "json, name=ChangeSetId" })
  changeSetId?: string;

  @Metadata({ data: "json, name=ChangeSetName" })
  changeSetName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: string;

  @Metadata({ data: "json, name=FailureCode" })
  failureCode?: FailureCodeEnum;

  @Metadata({ data: "json, name=FailureDescription" })
  failureDescription?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ChangeStatusEnum;
}
