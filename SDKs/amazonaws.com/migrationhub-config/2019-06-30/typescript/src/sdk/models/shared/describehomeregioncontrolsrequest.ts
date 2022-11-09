import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";


export class DescribeHomeRegionControlsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlId" })
  controlId?: string;

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Target" })
  target?: Target;
}
