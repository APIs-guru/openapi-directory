import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn: string;
}
