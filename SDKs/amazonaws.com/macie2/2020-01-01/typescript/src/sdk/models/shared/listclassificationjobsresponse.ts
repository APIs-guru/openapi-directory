import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



export class ListClassificationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: JobSummary })
  items?: JobSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
