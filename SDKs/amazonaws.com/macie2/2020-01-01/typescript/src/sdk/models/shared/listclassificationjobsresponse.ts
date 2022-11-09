import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobSummary } from "./jobsummary";


export class ListClassificationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.JobSummary })
  items?: JobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
