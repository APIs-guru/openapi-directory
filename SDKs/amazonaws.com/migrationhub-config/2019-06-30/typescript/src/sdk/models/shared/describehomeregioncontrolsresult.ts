import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HomeRegionControl } from "./homeregioncontrol";


export class DescribeHomeRegionControlsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=HomeRegionControls", elemType: shared.HomeRegionControl })
  homeRegionControls?: HomeRegionControl[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
