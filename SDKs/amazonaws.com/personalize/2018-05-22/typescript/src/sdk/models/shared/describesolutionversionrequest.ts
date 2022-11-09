import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSolutionVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
