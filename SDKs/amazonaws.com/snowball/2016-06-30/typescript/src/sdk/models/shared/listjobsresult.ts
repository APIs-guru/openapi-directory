import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobListEntry } from "./joblistentry";



export class ListJobsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobListEntries", elemType: JobListEntry })
  jobListEntries?: JobListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
