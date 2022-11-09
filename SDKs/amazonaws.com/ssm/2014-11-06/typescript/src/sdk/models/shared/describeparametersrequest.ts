import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParametersFilter } from "./parametersfilter";
import { ParameterStringFilter } from "./parameterstringfilter";


export class DescribeParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.ParametersFilter })
  filters?: ParametersFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParameterFilters", elemType: shared.ParameterStringFilter })
  parameterFilters?: ParameterStringFilter[];
}
