import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn: string;
}
