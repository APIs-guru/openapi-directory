import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformJobSummary } from "./transformjobsummary";



export class ListTransformJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformJobSummaries", elemType: TransformJobSummary })
  transformJobSummaries: TransformJobSummary[];
}
