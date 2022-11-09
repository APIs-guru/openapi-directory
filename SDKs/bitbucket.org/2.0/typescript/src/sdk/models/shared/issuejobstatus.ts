import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IssueJobStatusStatusEnum {
    Accepted = "ACCEPTED"
,    Started = "STARTED"
,    Running = "RUNNING"
,    Failure = "FAILURE"
}


// IssueJobStatus
/** 
 * The status of an import or export job
**/
export class IssueJobStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=pct" })
  pct?: number;

  @Metadata({ data: "json, name=phase" })
  phase?: string;

  @Metadata({ data: "json, name=status" })
  status?: IssueJobStatusStatusEnum;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
