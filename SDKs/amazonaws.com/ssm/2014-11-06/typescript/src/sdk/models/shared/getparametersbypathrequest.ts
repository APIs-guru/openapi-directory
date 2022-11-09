import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterStringFilter } from "./parameterstringfilter";


export class GetParametersByPathRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParameterFilters", elemType: shared.ParameterStringFilter })
  parameterFilters?: ParameterStringFilter[];

  @Metadata({ data: "json, name=Path" })
  path: string;

  @Metadata({ data: "json, name=Recursive" })
  recursive?: boolean;

  @Metadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
