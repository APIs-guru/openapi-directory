import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobListEntry } from "./joblistentry";


export class ListClusterJobsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobListEntries", elemType: shared.JobListEntry })
  jobListEntries?: JobListEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
