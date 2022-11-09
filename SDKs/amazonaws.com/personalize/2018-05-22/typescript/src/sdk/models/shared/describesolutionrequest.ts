import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSolutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionArn" })
  solutionArn: string;
}
