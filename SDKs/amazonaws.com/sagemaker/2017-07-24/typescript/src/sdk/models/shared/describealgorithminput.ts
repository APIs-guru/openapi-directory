import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAlgorithmInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;
}
