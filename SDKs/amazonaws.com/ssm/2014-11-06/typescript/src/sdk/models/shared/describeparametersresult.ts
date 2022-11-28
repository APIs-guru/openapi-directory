import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";



export class DescribeParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: ParameterMetadata })
  parameters?: ParameterMetadata[];
}
