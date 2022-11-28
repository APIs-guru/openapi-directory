import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersFilter } from "./parametersfilter";
import { ParameterStringFilter } from "./parameterstringfilter";



export class DescribeParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: ParametersFilter })
  filters?: ParametersFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterFilters", elemType: ParameterStringFilter })
  parameterFilters?: ParameterStringFilter[];
}
