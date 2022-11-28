import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSolutionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
