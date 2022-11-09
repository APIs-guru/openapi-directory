import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAlgorithmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithmArn" })
  algorithmArn: string;
}
