import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeRegionControl } from "./homeregioncontrol";



export class CreateHomeRegionControlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HomeRegionControl" })
  homeRegionControl?: HomeRegionControl;
}
