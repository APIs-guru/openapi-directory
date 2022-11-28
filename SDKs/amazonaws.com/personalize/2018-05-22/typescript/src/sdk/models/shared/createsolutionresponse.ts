import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSolutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn?: string;
}
