import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IssueJobStatusStatusEnum {
    Accepted = "ACCEPTED",
    Started = "STARTED",
    Running = "RUNNING",
    Failure = "FAILURE"
}


// IssueJobStatus
/** 
 * The status of an import or export job
**/
export class IssueJobStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=pct" })
  pct?: number;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IssueJobStatusStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
