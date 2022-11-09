import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopSolutionVersionCreationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
