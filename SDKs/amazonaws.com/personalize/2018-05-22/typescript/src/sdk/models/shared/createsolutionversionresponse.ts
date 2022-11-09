import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSolutionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
