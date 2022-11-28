import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSolutionMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
