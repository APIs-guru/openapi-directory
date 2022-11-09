import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSolutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionArn" })
  solutionArn?: string;
}
