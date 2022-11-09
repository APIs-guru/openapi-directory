import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSolutionMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics?: Map<string, number>;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
