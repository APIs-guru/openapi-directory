import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeRegionControl } from "./homeregioncontrol";



export class DescribeHomeRegionControlsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HomeRegionControls", elemType: HomeRegionControl })
  homeRegionControls?: HomeRegionControl[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
