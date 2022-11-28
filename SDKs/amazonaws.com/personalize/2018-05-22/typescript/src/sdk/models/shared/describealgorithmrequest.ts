import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAlgorithmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithmArn" })
  algorithmArn: string;
}
