import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopSolutionVersionCreationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
