import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



export class DescribeHomeRegionControlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlId" })
  controlId?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: Target;
}
