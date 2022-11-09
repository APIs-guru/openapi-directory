import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEngineVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultOnly" })
  defaultOnly?: boolean;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParameterGroupFamily" })
  parameterGroupFamily?: string;
}
