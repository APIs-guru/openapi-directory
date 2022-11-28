import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAlgorithmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;
}
