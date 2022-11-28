import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEngineVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultOnly" })
  defaultOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupFamily" })
  parameterGroupFamily?: string;
}
