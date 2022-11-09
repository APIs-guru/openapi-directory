import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterMetadata } from "./parametermetadata";


export class DescribeParametersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.ParameterMetadata })
  parameters?: ParameterMetadata[];
}
