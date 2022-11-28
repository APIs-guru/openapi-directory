import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSolutionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
