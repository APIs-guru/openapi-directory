import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterStringFilter } from "./parameterstringfilter";



export class GetParametersByPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterFilters", elemType: ParameterStringFilter })
  parameterFilters?: ParameterStringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=Recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
