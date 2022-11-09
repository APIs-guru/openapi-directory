import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransformJobSummary } from "./transformjobsummary";


export class ListTransformJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TransformJobSummaries", elemType: shared.TransformJobSummary })
  transformJobSummaries: TransformJobSummary[];
}
