import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSolutionMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
