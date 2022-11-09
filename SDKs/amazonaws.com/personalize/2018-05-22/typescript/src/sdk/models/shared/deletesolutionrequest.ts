import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSolutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionArn" })
  solutionArn: string;
}
